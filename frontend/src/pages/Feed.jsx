import React, { useEffect, useState } from 'react';
import Main from '../layout/Main';
import feed from '../assets/feed.svg';
import ourmessionbanner from '../assets/ourmessionbanner.svg';
import ourmession from '../assets/ourmession.svg';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ToastIfy from '../components/common/Toast';

const Feed = () => {
  const [postData, setPostData] = useState(null);
  const [liked, setLiked] = useState(false);
  // const extractedDate = dateStr.substring(0, 10);
  const navigate = useNavigate();
  const [displayCount, setDisplayCount] = useState(9);

  const sortedData = postData?.sort((a, b) => {
    return new Date(b?.createdAt) - new Date(a?.createdAt);
  });

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 9);
  };
  console.log('postData: ', postData);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (response?.ok) {
          setPostData(data);
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
    fetchPosts();
  }, [liked]);

  const handleLike = async (postId, like) => {
    console.log('like: ', like);
    try {
      const response = await fetch(
        `http://localhost:5000/api/posts/${postId}/like`,
        {
          method: like ? 'DELETE' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'), // Assuming you're storing the token in localStorage
          },
        }
      );
      if (response?.ok) {
        setLiked(!liked);
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
        <div
          className='w-full h-full min-h-[400px] text-center h-full flex items-center bg-cover bg-center px-0'
          style={{ backgroundImage: `url(${feed})` }}
        >
          <div className='w-full my-auto px-4 sm:px-8 flex flex-col justify-center '>
            <p className='font-semibold'>Discover</p>
            <p className='font-[500] w-[50%] mx-auto text-[22px]  sm:font-[900] sm:text-[52px] '>
              Explore the Feed
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
              Stay updated with the latest posts from our community.
            </p>
            <div className='font-[400] text-[12px] flex gap-3 sm:text-[18px] flex items-center justify-center'>
              <button
                onClick={() => navigate('/rosourses')}
                className='bg-black text-white hover:bg-transparent border border-black hover:border-white hover:text-white px-4 py-2'
              >
                Engage
              </button>
              <Link
                to={'/share'}
                className='bg-transparent text-white hover:bg-black hover:text-white border hover:border-black border-white px-4 py-2'
              >
                Share
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full h-full min-h-[100vh] flex flex-col items-center bg-[#027A48] px-8 py-4'>
          <div className='w-full sm:full text-center h-full px-4 sm:px-12 my-12 flex flex-col justify-center '>
            <p className='font-[500] text-[20px]  sm:font-bold sm:text-[48px] w-[50%] mx-auto'>
              STORIES OF HARASSMENT
            </p>
            <p className='sm:w-[50%] mx-auto font-[600] text-[12px] sm:text-[22px] py-3'>
              Even small actions such as leaving a message of support or
              reporting abuse can make someone who is experiencing harassment
              feel less alone.
            </p>
            <p className=''>
              Content Warning: Stories may contain sensitive material.
            </p>
          </div>
          <div className='w-full sm:w-full px-4 sm:px-12 h-full flex flex-wrap gap-6 justify-center'>
            {sortedData?.slice(0, displayCount)?.map((data) => {
              const likedPost = data?.likes?.includes(data?.createdBy?._id);
              return (
                <div className='sm:w-[32%] border border-gray-700 rounded-t-[20px] border-b-[10px] my-2 border border-gray-700'>
                  <div class='bg-transparent dark:bg-transparent flex'>
                    {/* <a href='#' className='w-[40%]'>
                    <img
                      class='w-full object-cover h-[250px] '
                      src='data:image/jpeg;base64,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'
                      alt=''
                    />
                  </a> */}
                    <div class='w-full p-6'>
                      <div className='flex items-start'>
                      <p className={`px-4 py-2 flex rounded-lg font-bold items-start ${data?.type === 'true' ? 'bg-blue-700 text-white' : 'bg-red-700 text-white'}`}>
                        {data?.type === 'true' ? 'Online' : 'Offline'}
                      </p>
                      </div>
                      <div
                        onClick={() =>
                          navigate('/post', { state: { data: data } })
                        }
                        className='w-full  cursor-pointer'
                      >
                        <h5 class='mb-2 pr-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                          {data?.title}
                        </h5>
                        <p class='my-3 font-normal text-gray-700 dark:text-gray-400'>
                          {/* {data?.description} */}
                          {data?.description?.length > 100
                            ? `${data?.description?.slice(0, 100)}...`
                            : data?.description}
                        </p>
                      </div>
                      <div
                        onClick={() => handleLike(data?._id, likedPost)}
                        className='flex items-center cursor-pointer gap-2 py-2'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          width={'20px'}
                          height={'20px'}
                        >
                          <path
                            fill={
                              data?.likes?.includes(data?.createdBy?._id)
                                ? '#fff'
                                : 'red-700'
                            }
                            d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'
                          />
                        </svg>
                        <span
                          className={`font-semibold ${
                            likedPost ? 'text-white' : 'text-black'
                          }`}
                        >
                          Like
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        {/* <div className="rounded-full bg-gray-100 p-3 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                      </div> */}
                        <div className=''>
                          <p className='font-semibol text-sm'>
                            {data?.createdByName}
                          </p>
                          <p className=''>
                            {data?.createdAt?.substring(0, 10)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleShowMore}
            className='border-[2px] border-black px-3 py-2 mx-auto'
          >
            View All
          </button>
          {/* <div className='sm:w-[32%] border border-gray-700 rounded-t-[20px] border-b-[10px] my-4'>
              <div class='bg-transparent dark:bg-transparent flex'>
                <div class='w-full p-6'>
                  <a href='#'>
                    <h5 class='mb-2 pr-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class='my-3 font-normal text-gray-700 dark:text-gray-400'>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className='flex items-center cursor-pointer gap-2 py-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      width={'20px'}
                      height={'20px'}
                    >
                      <path d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z' />
                    </svg>
                    <span className='font-semibold'>Like</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className=''>
                      <p className='font-semibol text-sm'>John Doe</p>
                      <p className=''>11 Feb 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
        </div>
        <div className='w-full h-full flex items-center bg-black bg-opacity-[50%] px-8 py-12'>
          <div className='w-[70%] sm:w-[60%] h-full px-4 sm:px-8 text-white flex flex-col justify-center '>
            <p className='font-[500] text-[22px]  sm:font-[900] sm:text-[52px] '>
              Discover Engaging Feed Posts Here
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
              Explore a Variety of Interesting Posts Shared by Our Community
            </p>
            <div className='font-[400] text-[12px] flex gap-3 sm:text-[18px]'>
              <button
                onClick={() => navigate('/login')}
                className='bg-black text-white hover:bg-transparent border border-black hover:border-white hover:text-black px-4 py-2'
              >
                Engage
              </button>
              <button
                onClick={() => navigate('/share')}
                className='bg-transparent text-white hover:bg-black hover:text-white border hover:border-black border-white px-4 py-2'
              >
                Share
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-full h-full flex items-center justify-center bg-[#FEF3F2] px-8 py-12'>
          <Footer />
        </div>
      </div>
    </Main>
  );
};

export default Feed;
