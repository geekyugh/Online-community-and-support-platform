import React, { useContext, useEffect, useState } from 'react'
import { FcLike,FcDislike  } from "react-icons/fc";
import { ImReply } from "react-icons/im";
import { LiaEditSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


function parseJwt (token) {
    if(token){
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));   
        return JSON.parse(jsonPayload);
    }
    return {user:null}
}

import { CommentsContext } from '../../contexts/CommentsContext'
export default function Comments({ postId }) {
    const token = localStorage.getItem('token')
    const {user} = parseJwt (token)
    
    // (token, process.env.JWT_SECRET); // Replace 'your_secret_key' with your actual secret key
    const [comment, setComment] = useState('')
    const [updating,setUpdating]=useState(false)
    const [updatingComment,setUpdatingComment] = useState(null)
    const [replying,setReplying]=useState(false)
    const {
        comments,
        addComment,
        likeComment,
        dislikeComment,
        updateComment,
        deleteComment,
        setPostId
    } = useContext(CommentsContext)
    const postComment = () => {
        addComment(token, postId, comment,replying?replying._id:null)
        setComment('')
        setUpdating(false)
        setUpdatingComment(false)
        setReplying(false)
    }
    const updateAComment = (commentId)=>{
        console.log(commentId)
        updateComment({commentId, updatedComment:comment})
        setComment('')
        setUpdating(false)
        setUpdatingComment(false)
        setReplying(false)
    }
    useEffect(() => {
        setPostId(postId)
    }, [postId])

    return (
        <>
                <p>Comments:</p>
        <div className="h-44 overflow-auto w-full flex flex-col justify-between">
            <div className="">
                {comments && comments.map(comment => (
                    <div key={comment._id} className='group flex items-center justify-between'>
                        <div className='grow'>
                            {/* {JSON.stringify(comment)} */}
                           <p>{comment?.name||comment?.createdBy?.name}: {comment.text}</p>
                           {comment.children&&comment.children.map(item=>(
                            <p className='px-5'>{comment?.name||comment?.createdBy?.name}: {item.text}</p>
                           ))}
                        </div>
                        {user&&
                        <div className="flex items-center gap-4">
                            <div className="cursor-pointer" onClick={()=>{
                                comment.likes.includes(user?.id)?dislikeComment(token,comment):likeComment(token,comment)
                                setUpdatingComment(null)
                            }}>
                                <div className="flex items-center">
                              {comment.likes.includes(user?.id)?<FcDislike /> :<FcLike /> }  
                               {comment.likes.length}
                              </div>
                                </div>
                         

{
                            comment.createdBy._id===user.id?
                            <div className="cursor-pointer" onClick={()=>{
                                setComment(comment.text)
                                setUpdating(true)
                                setReplying('')
                                setUpdatingComment(comment)
                            }}><LiaEditSolid />
                            </div>
                            :""}
                            <div className="cursor-pointer" onClick={()=>{
                                setReplying(comment)
                                setUpdating(false)
                                setComment('')
                                setUpdatingComment(null)
                            }}><ImReply /></div>
                         
                          {
                            comment.createdBy._id===user.id?<div className="cursor-pointer" onClick={()=>{
                                deleteComment(comment._id)
                                setUpdatingComment(null)
                            }}><MdDelete  />
                            </div>:""}
                        </div>}
                    </div>
                ))}
            </div>
           
        </div>
         <div className="flex gap-4 items-baseline">
         <div className="grow flex flex-col">
         {(updating || replying._id)&&<div className='flex justify-between'>
             <p>{replying&&`reply to: ${replying.text?.substring(0, 12)} ...`} {updating&&'updating'}</p>
             <RxCross2 className='cursor-pointer' onClick={()=>{
                   setComment('')
                   setUpdating(false)
                   setReplying({})
             }} />
             </div>}
        <div className="flex items-center gap-3 h-full">
        <input type="text" disabled={!user} onChange={(e) => setComment(e.target.value)} value={comment} className={`w-full h-10 rounded-md px-3 focus:outline-0 outline-0 ${updating&&'border border-cyan-400'} ${replying&&'border border-teal-500'}`} placeholder='comment...' />
         <button onClick={()=>{
             updating?updateAComment(updatingComment._id):postComment()
         }}
         disabled={!user}
          className="bg-teal-500 px-3 h-full py-2 rounded-md text-white">Send</button>
         </div>
        </div>
     </div>
     </>

    )
}
