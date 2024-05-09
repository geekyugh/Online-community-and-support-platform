import React from 'react';
import Main from '../layout/Main';
import home from '../assets/home/help.svg';
import empower from '../assets/home/empower.svg';
import newslatter from '../assets/home/newslatter.svg';
import ContactSupport from '../components/home/ContactSupport';
import Faqs from '../components/home/Faqs';
import Footer from '../components/common/Footer';
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <Main>
      <div className='w-full h-full'>
        <div
          className='w-full h-[calc(100vh-80px)] bg-cover bg-center px-0'
          style={{ backgroundImage: `url(${home})` }}
        >
          <div className='w-[70%] sm:w-[40%] h-full px-4 sm:px-12 text-white flex flex-col justify-center '>
            <p className='font-[500] text-[22px]  sm:font-[900] sm:text-[52px] '>
              Empowering Victims, Defeating Online Harassment Together
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
              Welcome to our online harassment support platform. We provide a
              safe space for victims to share their experiences, seek help from
              experts, and access educational resources.
            </p>
            <div className='font-[400] text-[12px] flex gap-3 sm:text-[18px]'>
              <button onClick={()=>navigate('/login')} className='bg-black text-white hover:bg-white border border-black hover:border-white hover:text-black hover:border px-4 py-2'>
                Join
              </button>
              <button onClick={()=>navigate('/rosourses')} className='bg-transparent text-white hover:bg-black hover:text-white border hover:border-black border-white px-4 py-2'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='w-full min-h-[100vh] h-full flex items-center bg-[#FEF3F2] px-8'>
          <div className='w-full sm:w-[50%] h-full px-4 sm:px-12 flex flex-col justify-center '>
            <p className='font-[500] text-[20px]  sm:font-[700] sm:text-[40px] '>
              Empower and connect with others by sharing your experiences in a
              supportive community.
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
              Our feature section allows users to post and share their personal
              stories, fostering a sense of community and support.
            </p>
          </div>
          <div className='w-full sm:w-[50%] px-4 sm:px-12 h-full flex justify-center '>
            <img src={empower} alt='' />
          </div>
        </div>
        <div className='w-full h-full min-h-[100vh] flex flex-col items-center bg-[#ECFDF3] px-8 py-4'>
          <div className='w-full sm:full text-center h-full px-4 sm:px-12 my-12 flex flex-col justify-center '>
            <p className='font-semibold  sm:font-semibold '>articles</p>
            <p className='font-[500] text-[20px]  sm:font-bold sm:text-[48px] w-[55%] mx-auto'>
              Expand Your Knowledge on Online Harassment
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
              Discover valuable resources to learn about online harassment.
            </p>
          </div>
          <div className='w-full sm:w-full px-4 sm:px-12 h-full flex items-start justify-between '>
            <div className='w-[32%]'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a target='_blank' href='https://www.theguardian.com/technology/2024/mar/15/violent-online-content-unavoidable-for-uk-children-ofcom-finds'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://i.guim.co.uk/img/media/de0ad1f0d352c89f042ab80708664db78433fec3/0_638_5657_3394/master/5657.jpg?width=1900&dpr=2&s=none'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm bg-gray-100 px-2 py-1 me-2'>
                      Education
                    </p>
                    <p className='font-semibold text-sm'>3 min ago</p>
                  </div>
                  <a target='_blank' href='https://www.theguardian.com/technology/2024/mar/15/violent-online-content-unavoidable-for-uk-children-ofcom-finds'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Violent online content ‘unavoidable’ for UK children, Ofcom finds
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Every child interviewed by media watchdog had watched violent material on the internet
                  </p>
                  <a
                    href='https://www.theguardian.com/technology/2024/mar/15/violent-online-content-unavoidable-for-uk-children-ofcom-finds'
                    class='inline-flex items-center py-2 text-sm font-medium text-center'
                    target='_blank'
                  >
                    Read more
                    <svg
                      class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-[32%]'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a target='_blank' href='https://ichef.bbci.co.uk/news/1024/cpsprodpb/113B5/production/_132418507_bhavs.jpg.webp'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://imageio.forbes.com/specials-images/imageserve/640843b7989cda2fec25191c/SPAIN-WOMEN-DAY/960x0.jpg?format=jpg&width=1440'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm bg-gray-100 px-2 py-1 me-2'>
                      Education
                    </p>
                    <p className='font-semibold text-sm'>3 min ago</p>
                  </div>
                  <a target='_blank' href='https://www.forbes.com/sites/ewelinaochab/2023/03/08/when-the-harassment-of-women-moves-online/'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    When The Harassment Of Women Moves Online
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  The digital world reinforces some of the gender inequalities. The UN Women reports that “a large gender gap continues in technology and innovation, despite recent improvements.
                  </p>
                  <a
                  target='_blank'
                    href='https://www.forbes.com/sites/ewelinaochab/2023/03/08/when-the-harassment-of-women-moves-online/'
                    class='inline-flex items-center py-2 text-sm font-medium text-center'
                  >
                    Read more
                    <svg
                      class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-[32%]'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a target='_blank' href='https://www.bbc.co.uk/news/newsbeat-68085784'>
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/113B5/production/_132418507_bhavs.jpg.webp'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <div className='flex items-center'>
                    <p className='font-semibold text-sm bg-gray-100 px-2 py-1 me-2'>
                      Education
                    </p>
                    <p className='font-semibold text-sm'>3 min ago</p>
                  </div>
                  <a target='_blank' href='https://www.bbc.co.uk/news/newsbeat-68085784'>
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Online hate: South Asian fans on facing 'firing squad of racist abuse'
                    </h5>
                  </a>
                  <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Eni Aluko and Brentford striker Neal Maupay have been speaking out about online hate directed at football pundits and players.
                  </p>
                  <a
                  target='_blank'
                    href='https://www.bbc.co.uk/news/newsbeat-68085784'
                    class='inline-flex items-center py-2 text-sm font-medium text-center'
                  >
                    Read more
                    <svg
                      class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className='border-[2px] border-black px-3 py-2 mx-auto'>View All</button>
        </div>
        <div
          className='w-full h-full flex items-center bg-black bg-opacity-[50%] px-8 py-12'
        >
          <div className='w-[70%] sm:w-[60%] h-full px-4 sm:px-8 text-white flex flex-col justify-center '>
            <p className='font-[500] text-[22px]  sm:font-[900] sm:text-[52px] '>
            Get Expert Help Today
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
            Our team of experts is here to support you through your journey.
            </p>
            <div className='font-[400] text-[12px] flex gap-3 sm:text-[18px]'>
              <button  className='bg-black text-white hover:bg-transparent border border-black hover:border-white hover:text-black px-4 py-2'>
              Contact
              </button>
              <button onClick={()=>navigate('/rosourses')} className='bg-transparent text-white hover:bg-black hover:text-white border hover:border-black border-white px-4 py-2'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-full h-full flex items-center justify-between bg-[#FEF3F2] px-8 py-12'>
          <div className='w-full sm:w-[40%] h-full px-4 sm:px-12 flex flex-col justify-center '>
            <p className='font-[500] text-[20px]  sm:font-[700] sm:text-[40px] '>
            Stay Updated with Our Newsletter
            </p>
            <div className="flex gap-2">
             <input
              type='text'
              placeholder='Email Address'
              style={{ width: '100%', boxSizing: 'border-box' }}
              className='w-full bg-white border border-gray-300 text-gray-900 text-sm focus:ring-0 p-2.5 outline-none'
            />
            <button className='bg-transparent text-black hover:bg-black border border-black hover:border-black hover:text-white px-4 py-2'>
              submit
              </button>
             </div>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
            Get the latest updates and resources delivered to your inbox.
            </p>
          </div>
          <div className='w-full sm:w-[50%] px-4 sm:px-12 h-full flex justify-center '>
            <img src={newslatter} alt='' />
          </div>
        </div>
        <div className="w-full h-full h-full flex items-center justify-center bg-[#ECFDF3] px-8 py-12">
            <ContactSupport />
        </div>
        <div className="w-full h-full h-full flex items-center justify-center bg-[#FEF3F2] px-8 py-12">
            <Faqs />
        </div>
        <div className="w-full h-full h-full flex items-center justify-center bg-[#ECFDF3] px-8 py-12">
            <Footer />
        </div>
      </div>
    </Main>
  );
};


export default Home;
