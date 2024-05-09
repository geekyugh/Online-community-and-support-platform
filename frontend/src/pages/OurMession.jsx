import React from 'react';
import Main from '../layout/Main';
import resoursepage from '../assets/resourspage.svg';
import ourmessionbanner from '../assets/ourmessionbanner.svg';
import ourmession from '../assets/ourmession.svg';
import Footer from '../components/common/Footer';

const OurMession = () => {
  return (
    <Main>
      <div className='w-full h-full'>
        <div
          className='w-full h-full min-h-[350px] bg-[#FEF3F2] h-full flex items-center px-0'
        >
          <div className='w-full my-auto px-4 sm:px-8 flex items-center '>
            <p className='sm:w-[50%] font-[500] text-[22px]  sm:font-[900] sm:text-[52px] '>
            Our Mission
            </p>
            <p className='sm:w-[50%] font-[400] text-[12px] sm:text-[18px] py-3'>
            We are committed to creating a safe online environment and providing support to those affected by harassment.
            </p>
          </div>
        </div>
        <div className='w-full h-full h-full flex items-center justify-between bg-white px-8 py-12'>
          <div className='w-full sm:w-[48%] h-full px-4 sm:px-12 flex flex-col justify-center '>
            <p className='font-[500] text-[20px]  sm:font-[700] sm:text-[40px] '>
            Empowering individuals to combat online harassment and create a safer digital space.
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
            Our website was born out of the founders' personal experiences with online harassment. They realized the need for a platform that provides support, resources, and education to those affected. Our mission is to empower individuals to stand up against online harassment and create a safer digital environment for all.
            </p>
          </div>
          <div className='w-full sm:w-[50%] px-4 sm:px-12 h-full flex justify-center '>
            <img src={ourmession} alt='' />
          </div>
        </div>
        <div
          className='w-full h-full min-h-[400px] text-center h-full flex items-center bg-cover bg-center px-0'
          style={{ backgroundImage: `url(${ourmessionbanner})` }}
        >
          <div className='w-full my-auto px-4 sm:px-8 text-white flex flex-col justify-center '>
            <p className='font-[500] w-[50%] mx-auto text-[22px]  sm:font-[900] sm:text-[52px] '>
            Join our supportive online community
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
            Find help, share your story, and make a difference
            </p>
            <button className="border border-white text-white px-4 py-2 hover:border-black hover:text-balck my-4 mx-auto">Join</button>
          </div>
        </div>
        <div className='w-full h-full h-full flex items-center justify-center bg-[#FEF3F2] px-8 py-12'>
          <Footer />
        </div>
      </div>
    </Main>
  );
};

export default OurMession;
