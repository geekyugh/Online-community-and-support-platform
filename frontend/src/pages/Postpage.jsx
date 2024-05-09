import React from 'react';
import Main from '../layout/Main';
import postpage from '../assets/postpage.svg';
import heretohelp from '../assets/heretohelp.svg';
import Faqs from '../components/home/Faqs';
import Footer from '../components/common/Footer';
import {useNavigate} from "react-router-dom"

const Postpage = () => {
  const navigate = useNavigate()
  return (
    <Main>
      <div className='w-full h-full'>
        <div
          className='w-full min-h-[400px] flex items-center h-full bg-cover bg-center px-0'
          style={{ backgroundImage: `url(${postpage})` }}
        >
          <div className='w-full h-full px-4 sm:px-8 flex flex-col justify-center '>
            <p className='font-semibold text-[16px]'>share</p>
            <p className='font-[500] text-[22px]  sm:font-[900] sm:text-[52px] '>
              Speak Out. Empower.
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
              Use this page to share your experiences with online harassment and
              raise awareness.
            </p>
            <div className='font-[400] text-[12px] flex gap-3 sm:text-[18px]'>
              <button  onClick={()=>navigate('/login')} className='bg-black text-white hover:bg-white border border-black hover:border-white hover:text-black hover:border border-white px-4 py-2'>
                Join
              </button>
              <button onClick={()=>navigate('/rosourses')} className='bg-transparent text-black hover:bg-black hover:text-white border hover:border-black border-black px-4 py-2'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-full flex flex-col items-center bg-[#FEF3F2] px-8 py-12'>
            <div className="w-[50%]">
                <div className="flex items-center justify-center gap-1 my-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={"20px"} height={"20px"}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={"20px"} height={"20px"}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={"20px"} height={"20px"}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={"20px"} height={"20px"}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={"20px"} height={"20px"}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                </div>
                <div className=" text-center">
                    <p className='font-[500] text-[18px] sm:font-bold sm:text-[24px]'>Sharing my story on this platform has been incredibly empowering. I have found support and solidarity from others who have experienced similar situations.</p>
                </div>
                <div className="flex items-ceter justify-center my-8">
                    <div className="">
                        <p className='font-semibol'>Jane Doe</p>
                        <p className=''>Marketing Manager, ABC Corp</p>
                    </div>
                    <div class="h-[60px] w-[1px] mx-2 flex bg-black items-center text-black"></div>
                    <div className="my-auto">
                        Web Flow
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-full flex flex-col items-center bg-[#ECFDF3] px-8 py-12'>
          <div className='flex w-full items-center justify-between py-12 px-8 '>
            <div className=''>
              <p className='font-[500] text-[22px]  sm:font-bold sm:text-[40px] '>
                Speak Out. Empower.{' '}
              </p>
              <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
                {' '}
                Join our community and find support{' '}
              </p>
            </div>
            <div className=''>
              <div className='font-[400] text-[12px] flex gap-3 sm:text-[18px]'>
                <button onClick={()=>navigate('/login')} className='bg-black text-white hover:bg-white border border-black hover:border-white hover:text-black hover:border border-white px-4 py-2'>
                  Join
                </button>
                <button onClick={()=>navigate('/resourses')} className='bg-transparent text-black hover:bg-black hover:text-white border hover:border-black border-black px-4 py-2'>
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <Faqs />
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center bg-[#FEF3F2] px-8 py-12'>
          <div className='w-full flex items-start justify-between'>
            <div className='w-[65%]'>
              <div className='w-full h-full px-4 sm:px-8 flex flex-col justify-center '>
                <p className='font-semibold text-[16px]'>share</p>
                <p className='font-[500] text-[22px]  sm:font-[900] sm:text-[52px] '>
                  Speak Out. Empower.
                </p>
                <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
                  Use this page to share your experiences with online harassment
                  and raise awareness.
                </p>
              </div>
            </div>
            <div className='w-[35%]'>
              <div className='flex py-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  width={'20px'}
                  height={'20px'}
                  className='mt-1'
                >
                  <path d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z' />
                </svg>
                <div className='ms-2'>
                  <p className='font-semibold text-[20px]'>Email</p>
                  <p>support@relume.io</p>
                </div>
              </div>
              <div className='flex py-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  width={'20px'}
                  height={'20px'}
                  className='mt-1'
                >
                  <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
                </svg>
                <div className='ms-2'>
                  <p className='font-semibold text-[20px]'>Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className='flex py-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                  width={'20px'}
                  height={'20px'}
                  className='mt-1'
                >
                  <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
                </svg>
                <div className='ms-2'>
                  <p className='font-semibold text-[20px]'>Location</p>
                  <p>123 Main St, Sydney NSW 2000, Australia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full py-8">
          <img src={heretohelp} alt="" className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='w-full h-full flex items-center justify-center bg-[#FEF3F2] px-8 py-12'>
          <Footer />
        </div>
      </div>
    </Main>
  );
};

export default Postpage;
