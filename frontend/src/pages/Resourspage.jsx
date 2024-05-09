import React from 'react';
import Main from '../layout/Main';
import resoursepage from '../assets/resourspage.svg';
import gainKnowlage from '../assets/gainKnowlage.svg';
import empower from '../assets/home/empower.svg';
import newslatter from '../assets/home/newslatter.svg';
import ContactSupport from '../components/home/ContactSupport';
import Faqs from '../components/home/Faqs';
import Footer from '../components/common/Footer';

const Resourspage = () => {
  return (
    <Main>
      <div className='w-full h-full'>
        <div
          className='w-full h-full min-h-[350px] h-full flex items-center bg-cover bg-center px-0'
          style={{ backgroundImage: `url(${resoursepage})` }}
        >
          <div className='w-[90%] sm:w-[70%] my-auto px-4 sm:px-8 text-white flex flex-col justify-center '>
            <p className='font-[500] text-[22px]  sm:font-[900] sm:text-[52px] '>
            Empowering Education Resources
            </p>
            <p className='w-[70%] sm:w-[50%] font-[400] text-[12px] sm:text-[18px] py-3'>
            Discover a wealth of educational material to help you understand and combat online harassment.
            </p>
          </div>
        </div>
        <div className='w-full h-full min-h-[100vh] flex flex-col items-center bg-[#B66363] px-8 py-4'>
          <div className='w-full sm:full text-center h-full px-4 sm:px-12 my-12 flex flex-col justify-center '>
            <p className='font-semibold  sm:font-semibold '>articles</p>
            <p className='font-[500] text-[20px]  sm:font-bold sm:text-[48px] w-[40%] mx-auto'>
            Resources for Online Harassment
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
            Find helpful resources to deal with online harassment
            </p>
          </div>
          <div className='w-full sm:w-full px-4 sm:px-12 h-full flex flex-wrap  items-start justify-between '>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a href='https://cyberbullying.org/what-is-bullying'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://cyberbullying.org/wp-content/uploads/2018/04/bullying-definition.jpg'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href='https://cyberbullying.org/what-is-bullying'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    What is Bullying?
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  By Cyberbullying Research Center
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a href='https://cyberbullying.org/what-is-cyberbullying'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://cyberbullying.org/wp-content/uploads/2015/03/sameer-hinduja-bullying-assembly-1150x715.jpg'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href='https://cyberbullying.org/what-is-cyberbullying'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    What is Cyberbullying?
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  By Cyberbullying Research Center
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a href='#'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='data:image/jpeg;base64,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'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href='#'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Effects of Bullying

                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Bullying can affect everyone—those who are bullied, those who bully, and those who witness bullying.
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a href=' https://cyberbullying.org/report'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNX87cMAxiTwAndaHt1wYxUuGWvaknhdgebg&usqp=CAU'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href=' https://cyberbullying.org/report'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Report Cyberbullying | Social Media Apps, Gaming and Online Platforms
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  eport cyberbullying and online abuse to the relevant social media apps, gaming networks, and related platforms using the contact information below.
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a href=' https://cyberbullying.org/report'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pDr-yumyzT8aWh_wULFdwz1juRSXxymfz3R5bjE4ZkCK4W3AJo9Dvp27hWdbzSBOJu0&usqp=CAU'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href='#'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Statistics
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Findings from our peer-reviewed research studies on the various forms of online victimization and offending that have affected youth most profoundly in recent years.
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a href='https://cyberbullying.org/stories'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuJy24bpx5DoFYSCkLWPcw1QN0mrLmaPE_A&usqp=CAU'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href='https://cyberbullying.org/stories'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Share Your Cyberbullying Story
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Share and read cyberbullying stories posted by others below. We have many resources on this site to help you deal with cyberbullying.
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <button className='border-[2px] border-black px-3 py-2 mx-auto'>View All</button>
        </div>
        <div className='w-full h-full min-h-[100vh] flex flex-col items-center bg-[#ECFDF3] px-8 py-4'>
          <div className='w-full sm:full text-center h-full px-4 sm:px-12 my-12 flex flex-col justify-center '>
            <p className='font-semibold  sm:font-semibold '>articles</p>
            <p className='font-[500] text-[20px]  sm:font-bold sm:text-[48px] w-[40%] mx-auto'>
            Explore Our Resources
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
            Find helpful articles, guides, and how-to materials
            </p>
          </div>
          <div className='w-full sm:w-full px-4 sm:px-12 h-full flex flex-wrap  items-center justify-between '>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent border border-black dark:bg-transparent'>
                <a href='#'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='data:image/jpeg;base64,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'
                    alt=''
                  />
                </a>
                <div class='py-5 p-4'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href='#'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent border border-black dark:bg-transparent'>
                <a href='#'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='data:image/jpeg;base64,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'
                    alt=''
                  />
                </a>
                <div class='py-5 p-4'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href='#'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <div className='w-[32%] my-2'>
              <div class='max-w-sm bg-transparent border border-black dark:bg-transparent'>
                <a href='#'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='data:image/jpeg;base64,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'
                    alt=''
                  />
                </a>
                <div class='py-5 p-4'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm py-1'>
                      Category
                    </p>
                  </div>
                  <a href='#'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                 <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"} ><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill='gray' /></svg>
                    </div>
                    <div className="">
                        <p className='font-semibol text-sm'>John Doe</p>
                        <p className="">11 Feb 2022</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <button className='border-[2px] border-black px-3 py-2 mx-auto'>View All</button>
        </div>
        <div className='w-full h-full h-full flex items-center justify-between bg-white px-8 py-12'>
          <div className='w-full sm:w-[48%] h-full px-4 sm:px-12 flex flex-col justify-center '>
            <p className='font-[500] text-[20px]  sm:font-[700] sm:text-[40px] '>
            Discover the Power of Our Extensive Resources for Support and Knowledge
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
            Our resources provide valuable information, support, and coping strategies to help you navigate through challenging situations.
            </p>
            <div className="flex">
                <div className="w-[50%]">
                    <p className='font-bold text-[20px] pb-2'>Gain Knowledge</p>
                    <p className=''>Access a wide range of educational materials to expand your understanding and awareness.</p>
                </div>
                <div className="w-[50%]">
                    <p className='font-bold text-[20px] pb-2'>Gain Knowledge</p>
                    <p className=''>Access a wide range of educational materials to expand your understanding and awareness.</p>
                </div>
            </div>
          </div>
          <div className='w-full sm:w-[50%] px-4 sm:px-12 h-full flex justify-center '>
            <img src={gainKnowlage} alt='' />
          </div>
        </div>
        <div className="w-full h-full h-full flex items-center justify-center bg-[#ECFDF3] px-8 py-12">
            <Faqs />
        </div>
        <div className='w-full h-full h-full flex items-center justify-center bg-[#FEF3F2] px-8 py-12'>
          <Footer />
        </div>
      </div>
    </Main>
  );
};

export default Resourspage;
