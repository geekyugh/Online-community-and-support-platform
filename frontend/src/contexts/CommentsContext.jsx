import React, { createContext, useContext, useEffect, useState } from 'react';
import { SocketContext } from './SocketContext';
export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
    const { socket } = useContext(SocketContext)
    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState('')

    // Read comments
    const getComments = (postId) => {
        // Add logic to fetch comments from server
        socket.emit("getComments", postId)
    };

    // Write comments
    const addComment = (token, postId, comment, replyto) => {
        // Add logic to add new comment to the server
        socket.emit("addComment", { token, post: postId, text: comment, replyto })

    };
    const likeComment = (token, comment) => {
        // Add logic to add new comment to the server
        socket.emit("likeComment", { token, comment: comment._id })
    };
    const dislikeComment = (token, comment) => {
        // Add logic to add new comment to the server
        socket.emit("dislikeComment", { token, comment: comment._id })
    };

    // Update comments
    const updateComment = ({ commentId, updatedComment }) => {
        // Add logic to update comment on the server
        socket.emit("updateComment", { commentId, updatedComment })

    };

    // Delete comments
    const deleteComment = (commentId) => {
        // Add logic to delete comment from the server
        socket.emit("deleteComment", commentId)
    };

    useEffect(() => {
        if (socket) {
            socket.on('comments', (data) => {
                setComments(data)
            })
            socket.on('commentAdded', (newComment) => {
                setComments(prevComments => {
                    // Check if the new comment has a parentComment
                    if (newComment.parentComment) {
                        // Find the parent comment in the state array
                        return prevComments.map(comment => {
                            if (comment._id === newComment.parentComment) {
                                // Add the new comment as a child to the parent comment
                                return {
                                    ...comment,
                                    children: [...(comment.children || []), newComment]
                                };
                            }
                            return comment;
                        });
                    } else {
                        // If the new comment doesn't have a parentComment, simply add it to the state array
                        return [...prevComments, newComment];
                    }
                });
            });
            socket.on('commentUpdated', async (updatedComment) => {
                console.log(updatedComment)
                setComments(prevComments => {
                    return prevComments.map(comment => {
                        if (comment._id === updatedComment._id) {
                            return updatedComment;
                        }
                        return comment;
                    });
                });
            });
            socket.on('commentDeleted', (data) => {
                setComments(prevComments => prevComments.filter(comment => comment._id !== data));
            })
        }
        return ()=>{
            if(socket){
                socket.removeAllListeners();
            }
        }
    }, [socket, comments])

    useEffect(() => {
        if (socket && postId) {
            getComments(postId)
        }
    }, [socket, postId])


    return (
        <CommentsContext.Provider value={{
            comments,
            getComments,
            addComment,
            likeComment,
            dislikeComment,
            deleteComment,
            updateComment,
            setPostId,
        }}>
            {children}
        </CommentsContext.Provider>
    );
};

