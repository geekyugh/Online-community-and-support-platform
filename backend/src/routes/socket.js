const socketIO = require('socket.io');
const jwt = require('jsonwebtoken');
const {Types:{ObjectId}} = require('mongoose');

const Comments = require('../models/Comments');

module.exports = function (server) {
    const io = socketIO(server, {
        cors: {
            origin: '*', // Allow requests from any origin, you can change this to your specific frontend URL
            methods: ['GET', 'POST'], // Specify the HTTP methods allowed
            allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
            credentials: true // Enable credentials (if required)
        }
    });

    io.on('connection', (socket) => {
        console.log('A user connected');
        // Get comments
        socket.on('getComments',async (postId) => {
            const postIdObjectId = new ObjectId(postId);
            const comments = await Comments.aggregate([
                {
                    $match: { post: postIdObjectId } // Filter comments based on postId
                },
                {
                    $match: { $or: [{ parentComment: null }, { parentComment: { $exists: false } }] } // Filter root-level comments
                },
                {
                  $lookup: {
                    from: 'comments', // The collection to perform the lookup
                    localField: '_id',
                    foreignField: 'parentComment',
                    as: 'children' // Populate child comments as 'children' array
                  }
                },
                {
                    $lookup: {
                        from: 'users', // Assuming 'users' is the collection where user data is stored
                        let: { createdById: '$createdBy' }, // Define a variable to reference the createdBy field
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ['$_id', '$$createdById']
                                    }
                                }
                            },
                            {
                                $project: {
                                    _id: 1,
                                    email: 1,
                                    name: 1
                                }
                            }
                        ],
                        as: 'createdBy' // Populate user data as 'createdByUser' array
                    }
                },
                {
                    $addFields: {
                        createdBy: { $arrayElemAt: ['$createdBy', 0] } // Replace createdByUser with the first element of 'createdByUser' array
                    } // Replace root with the first element of 'createdByUser' array
                }               
              ]
             );
            socket.emit('comments', comments);
        });

        // Add comment
        socket.on('addComment',async ({token,post,text,replyto}) => {
            try {
                // Verify token to authenticate user
                const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace 'your_secret_key' with your actual secret key
        
                // Logic to add new comment to the database
                const newComment = await Comments.create({
                    post,
                    text,
                    createdBy: decoded.user.id, // Assuming userId is stored in the token, replace it with the actual field name.
                    parentComment:replyto
                });
                const populatedComment = await Comments.findById(newComment._id).populate('createdBy', 'name');


                // After adding comment, broadcast to all clients
                io.emit('commentAdded', populatedComment);
            } catch (error) {
                // Handle authentication or database errors
                console.error('Error adding comment:', error.message);
                // Optionally emit an error event to the client
                socket.emit('error', { message: 'Error adding comment. Please try again.' });
            }
        });

        // Update comment
        socket.on('updateComment', async ({ commentId, updatedComment }) => {
            try {
                // Update comment text in the database
                const updated = await Comments.findByIdAndUpdate(commentId, { text: updatedComment }, { new: true }).populate('createdBy', 'name');

                if (!updated) {
                    console.log('i am stuck here')
                    // If comment is not found, emit an error event to the client
                    socket.emit('error', { message: 'Comment not found' });
                    return;
                }
        
                // Broadcast the updated comment to all clients
                io.emit('commentUpdated', updated);
            } catch (error) {
                // Emit an error event to the client
                socket.emit('error', { message: 'Error updating comment. Please try again.' });
            }
        });
        socket.on('likeComment',async ({token,comment}) => {
            try {
                // Verify token to authenticate user
                const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace 'your_secret_key' with your actual secret key
        
                // Logic to update comment in the database
                const updatedComment = await Comments.findByIdAndUpdate(
                    comment,
                    { $addToSet: { likes: decoded.user.id } }, // Add userId to the likes array if it doesn't exist
                    { new: true }
                ).populate('createdBy', 'name')
                const childComments = await Comments.find({ parentComment: updatedComment._id }).populate('createdBy', 'name');

// Combine the updated comment and its child comments
                const combinedResult = {
                    ...updatedComment.toObject(), // Convert Mongoose document to plain JavaScript object
                    children: childComments
                };

        
                // After updating comment, broadcast to all clients
                io.emit('commentUpdated', combinedResult);
            } catch (error) {
                // Handle authentication or database errors
                console.error('Error liking comment:', error.message);
                // Optionally emit an error event to the client
                socket.emit('error', { message: 'Error liking comment. Please try again.' });
            }
        });

        socket.on('dislikeComment', async ({ token, comment }) => {
            try {
                // Verify token to authenticate user
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
                // Logic to update comment in the database
                const updatedComment = await Comments.findByIdAndUpdate(
                    comment,
                    { $pull: { likes: decoded.user.id } }, // Remove userId from the likes array
                    { new: true }
                ).populate('createdBy', 'name');
                // Fetch child comments associated with the updated comment
                const childComments = await Comments.find({ parentComment: updatedComment._id }).populate('createdBy', 'name');
        
                // Combine the updated comment and its child comments
                const combinedResult = {
                    ...updatedComment.toObject(), // Convert Mongoose document to plain JavaScript object
                    children: childComments
                };
        
                // After updating comment, broadcast to all clients
                io.emit('commentUpdated', combinedResult);
            } catch (error) {
                // Handle authentication or database errors
                console.error('Error disliking comment:', error.message);
                // Optionally emit an error event to the client
                socket.emit('error', { message: 'Error disliking comment. Please try again.' });
            }
        });
        
        const deleteCommentAndReplies = async (commentId) => {
            try {
                // Find and delete comments with the specified parentComment
                const childComments = await Comments.find({ parentComment: commentId });
        
                // Delete child comments recursively
                for (const childComment of childComments) {
                    await deleteCommentAndReplies(childComment._id);
                }
        
                // Delete the main comment
                await Comments.findOneAndDelete({ _id: commentId });
        
                // Broadcast the ID of the deleted comment to all clients
                io.emit('commentDeleted', commentId);
            } catch (error) {
                console.error('Error deleting comment and replies:', error.message);
                throw error;
            }
        };
        // Delete comment
        socket.on('deleteComment', async (commentId) => {
            try {
                // Call deleteCommentAndReplies function
                await deleteCommentAndReplies(commentId);
            } catch (error) {
                // Emit an error event to the client
                socket.emit('error', { message: 'Error deleting comment. Please try again.' });
            }
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });


        // Add other event listeners and logic here
    });
};