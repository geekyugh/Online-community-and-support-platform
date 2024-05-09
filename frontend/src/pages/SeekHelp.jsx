import React from 'react';
import Main from '../layout/Main';
import seekhelp from '../assets/seekhelp/seekhelp.svg';
import empower from '../assets/home/empower.svg';
import newslatter from '../assets/home/newslatter.svg';
import ContactSupport from '../components/home/ContactSupport';
import Faqs from '../components/home/Faqs';
import Footer from '../components/common/Footer';

const SeekHelp = () => {
  return (
    <Main>
      <div className='w-full h-full'>
        <div
          className='w-full h-full min-h-[400px] h-full flex items-center bg-cover bg-center px-0'
          style={{ backgroundImage: `url(${seekhelp})` }}
        >
          <div className='w-[70%] sm:w-[60%] my-auto px-4 sm:px-8 text-white flex flex-col justify-center '>
            <p className='font-[500] text-[22px]  sm:font-[900] sm:text-[52px] '>
              Get Help Now
            </p>
            <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
              We're here to support you through your online harassment
              experience.
            </p>
          </div>
        </div>
        <div className='w-full h-full min-h-[100vh] flex flex-col items-center bg-[#027A48] px-8 py-4'>
          <div className='w-full sm:full h-full px-4 sm:px-12 my-12 flex flex-col justify-center '>
            <p className='font-[500] text-[20px] sm:font-bold sm:text-[48px] w-[55%]'>
              Discover Expert Help for Dealing with Online Harassment
            </p>
          </div>
          <div className='w-full sm:w-full px-4 sm:px-12 h-full flex items-start justify-between '>
            <div className='w-full sm:w-[50%] md:w-[32%]'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a
                  target='_blank'
                  href='https://saferinternet.org.uk/professionals-online-safety-helpline'
                >
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://d1xsi6mgo67kia.cloudfront.net/uploads/2021/10/Child-and-phone_2-scaled.jpg'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <a
                    target='_blank'
                    href='https://saferinternet.org.uk/professionals-online-safety-helpline'
                  >
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Professionals Online Safety Helpline
                    </h5>
                  </a>
                  <p class='mb-3 font-normal'>
                    Supporting professionals working with children and young
                    people, with any online safety issue they may be having
                  </p>
                  <a
                    target='_blank'
                    href='https://saferinternet.org.uk/professionals-online-safety-helpline'
                    class='inline-flex items-center py-2 text-sm font-medium text-center'
                  >
                    Contact
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
            <div className='w-full sm:w-[50%] md:w-[32%]'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a
                  target='_blank'
                  href='https://www.ceop.police.uk/Safety-Centre/'
                >
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://www.thinkuknow.co.uk/globalassets/11-to-18-website/partial-images/online-sexual-harassment.png'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <a
                    target='_blank'
                    href='https://www.ceop.police.uk/Safety-Centre/'
                  >
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Are you worried about online sexual abuse or the way
                      someone has been communicating with you online?
                    </h5>
                  </a>
                  <p class='mb-3 font-normal'>
                    Are you worried about online sexual abuse or the way someone
                    has been communicating with you online?
                  </p>
                  <a
                    target='_blank'
                    href='https://www.ceop.police.uk/Safety-Centre/'
                    class='inline-flex items-center py-2 text-sm font-medium text-center'
                  >
                    Contact
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
            <div className='w-full sm:w-[50%] md:w-[32%]'>
              <div class='max-w-sm bg-transparent  dark:bg-transparent'>
                <a
                  target='_blank'
                  href='https://www.met.police.uk/advice/advice-and-information/har/harassment-on-social-media/'
                >
                  <img
                    class='w-full object-cover h-[250px] '
                    src='https://static.toiimg.com/thumb/msid-78494941,width-400,resizemode-4/78494941.jpg'
                    alt=''
                  />
                </a>
                <div class='py-5'>
                  <a
                    target='_blank'
                    href='https://www.met.police.uk/advice/advice-and-information/har/harassment-on-social-media/'
                  >
                    <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      I'm being harassed by someone on social media. What can I
                      do?
                    </h5>
                  </a>
                  <p class='mb-3 font-normal'>
                    How to report online harassment, malicious messaging or
                    distribution of private sexual images without consent
                  </p>
                  <a
                    href='https://www.met.police.uk/advice/advice-and-information/har/harassment-on-social-media/'
                    class='inline-flex items-center py-2 text-sm font-medium text-center'
                    target='_blank'
                  >
                    Contact
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
        </div>

        <div className='w-full h-full h-full flex items-center justify-center bg-[#ECFDF3] px-8 py-12'>
          <div className='w-[60%] mx-auto py-12'>
            <div className='py-4'>
              <p className='font-[500] text-[20px] sm:font-bold sm:text-[48px] text-center py-2'>
                FAQs
              </p>
              <p className='text-center'>
                Find answers to commonly asked questions about seeking help for
                online harassment.
              </p>
            </div>
            <div className='py-4'>
              <p className='font-bold py-2'>How can I report?</p>
              <p className=''>
                To report online harassment, you can usually find reporting
                options on the platform where the harassment occurred. Look for
                a 'Report' or 'Flag' button and follow the instructions
                provided. If you're unsure, you can also reach out to the
                platform's support team for assistance.
              </p>
            </div>
            <div className='py-4'>
              <p className='font-bold py-2'>Is the online community platform moderated?</p>
              <p className=''>
              Yes, our online community platform is moderated to ensure a positive and inclusive environment for all members. Moderators oversee discussions, enforce community guidelines, and address any inappropriate behavior or content. Our goal is to maintain a respectful and constructive atmosphere where everyone feels welcome and valued.
              </p>
            </div>
            <div className='py-4'>
              <p className='font-bold py-2'>What types of activities can I expect in the online community platform?</p>
              <p className=''>
              Our online community platform offers a variety of activities and features, including:
              Discussion forums or boards for sharing ideas and asking questions
              Interest-based groups or sub-communities
              Events such as webinars, workshops, or virtual meetups
              Resource libraries with articles, tutorials, and other educational materials
              Opportunities for collaboration on projects or initiatives
              Networking and mentorship opportunities.
              </p>
            </div>
            <div className='py-4'>
              <p className='font-bold py-2'>How can I contribute to the online community platform?</p>
              <p className=''>
              There are many ways to contribute to our online community platform, such as:
              Participating in discussions and sharing your insights or experiences
              Providing support and guidance to fellow members
              Sharing relevant resources, articles, or tools
              Organizing or hosting events, webinars, or workshops
              Collaborating with others on projects or initiatives
              Offering feedback and suggestions for improving the community.
              </p>
            </div>
            <div className='py-4'>
              <p className='font-bold py-2'>Is there a code of conduct or community guidelines?</p>
              <p className=''>
              Yes, we have a code of conduct or community guidelines that outline expected behavior and standards for participation within the community. These guidelines promote respect, inclusivity, and constructive engagement among members. By adhering to these guidelines, we can maintain a positive and welcoming community environment for everyone.
              </p>
            </div>
            <div className='py-4'>
              <p className='font-bold py-2'>How can I report inappropriate behavior or content?</p>
              <p className=''>
              f you encounter any inappropriate behavior or content within the community platform, you can report it to the moderators or administrators. Most platforms have reporting features or contact options available for this purpose. Reports are taken seriously and will be addressed promptly to ensure the integrity and safety of the community.
              </p>
            </div>
            <div className='py-4'>
              <p className='font-bold py-2'>How can I report?</p>
              <p className=''>
                To report online harassment, you can usually find reporting
                options on the platform where the harassment occurred. Look for
                a 'Report' or 'Flag' button and follow the instructions
                provided. If you're unsure, you can also reach out to the
                platform's support team for assistance.
              </p>
            </div>
            <div className='py-4'>
              <p className='font-[500] pt-4 text-[20px] sm:font-bold sm:text-[32px] text-center'>
                Still have questions?
              </p>
              <p className='text-center  py-4'>
                Contact us for further assistance.
              </p>
              <button className='border-[2px] border-black px-3 py-2 mx-auto flex item-center justify-center'>
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-full h-full flex items-center justify-center bg-[#FEF3F2] px-8 py-12'>
          <ContactSupport />
        </div>
        <div className='w-full h-full h-full flex items-center justify-center bg-[#FEF3F2] px-8 py-12'>
          <Footer />
        </div>
      </div>
    </Main>
  );
};

export default SeekHelp;
