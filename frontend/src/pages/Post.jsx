import React, { useEffect, useState } from 'react';
import Main from '../layout/Main';
import Footer from '../components/common/Footer';
import {useLocation} from 'react-router-dom'
import { toast } from 'react-toastify';
import ToastIfy from '../components/common/Toast';
import Comments from '../components/Comments/Comments';

const Post = () => {
    const [postData,setPostData] = useState(null)
    console.log('postData: ', postData);
    const location = useLocation()
    console.log('location: ', location);
  const [liked, setLiked] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch(`http://localhost:5000/api/posts/${location?.state?.data?._id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            if (response.ok) {
              setPostData(data);
              window.scrollTo(0, 0);
            } else {
              // Handle signup error
              toast('something went wrong');
              console.error('Signup failed');
            }
          } catch (error) {
            toast('something went wrong');
            console.error('Signup failed');
          }
        };
        fetchPosts()
      }, [liked]);
      const handleLike = async (like) => {
        try {
          const response = await fetch(`http://localhost:5000/api/posts/${location?.state?.data?._id}/like`, {
            method: like ? 'DELETE' : 'POST',
            headers: {
              'Content-Type': 'application/json',
              'token': localStorage.getItem('token') // Assuming you're storing the token in localStorage
            }
          });
          if (response.ok) {
            setLiked(!liked)
          } else {
            console.error('Failed to like/unlike post');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <Main>
        <ToastIfy />
      <div className='w-full h-full'>
        <div className='w-full h-full min-h-screen flex items-start bg-[#FEF3F2] px-8 py-12'>
          <div className='w-[50%] p-6'>
            <p className='font-bold text-[32px]'>
             {postData?.title}
            </p>
            <p className='text-[18px] whitespace-pre-wrap pt-6'>
             {postData?.description}
            </p>
            {postData?.image!==null && <img src={`http://localhost:5000/${postData?.image}`} alt="Base64" />}
            
            <div className="flex justify-end">
            <div onClick={()=>handleLike(postData?.likes?.includes(postData?.createdBy?._id))} className='flex items-center cursor-pointer gap-2 py-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          width={'20px'}
                          height={'20px'}
                        >
                          <path fill={postData?.likes?.includes(postData?.createdBy?._id)?'#0000ff':'#000000'} d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z' />
                        </svg>
                        <span className={`font-semibold ${postData?.likes?.includes(postData?.createdBy?._id)?'text-blue-700':'text-black'}`}>Like</span>
                      </div>
            </div>
            <Comments postId={location?.state?.data?._id} />
         
          </div>
          <div className='w-[50%] flex justify-end'>
            <div className='w-[80%] bg-[#ECFDF3] rounded-lg p-6'>
              <p className='font-semibold text-[32px]'>Created At:</p>
              <p className='text-[24px]'>{postData?.createdAt?.substring(0, 10)}</p>
              <p className='font-semibold text-[32px] pt-6'>Motives:</p>
              <p className='text-[24px]'>{postData?.typeofharrassment}</p>
              <p className='font-semibold text-[32px] pt-6'>Tactics:</p>
              <p className='text-[24px]'>{postData?.whyhappend}</p>
              <p className='font-semibold text-[32px] pt-6'>Likes:{' '} {postData?.likes?.length} </p>
              {/* <p className='text-[24px]'>{postData?.likes}</p> */}
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </Main>
  );
};

export default Post;
