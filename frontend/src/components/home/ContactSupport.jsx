import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSupport = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_czh4cec', 'template_r1vnzdp', form.current, {
        publicKey: 'VdCF078WfL1nLde0D',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('message sent successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <div className='w-[70%] flex flex-col items-center justify-center text-center'>
      <p className='font-semibold'>Get Help</p>
      <p className='font-[500] text-[20px] sm:font-bold sm:text-[48px] w-[55%] mx-auto'>
        Contact Support
      </p>
      <p className='font-[400] text-[12px] sm:text-[18px] py-3'>
        {' '}
        Have a question? Need assistance? Contact us.{' '}
      </p>
      <form action='w-[100%]' ref={form} onSubmit={sendEmail}>
        <div className='flex w-[100%] justify-between'>
          <div className='mb-5 mx-2 text-start w-1/2'>
            <label
              for='base-input'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              First Name
            </label>
            <input
              type='text'
              name='user_name'
              style={{ width: '100%', boxSizing: 'border-box' }}
              className='w-full min-w-[20rem] bg-white border border-gray-300 text-gray-900 text-sm focus:ring-0 p-2.5 outline-none'
            />
          </div>
          <div className='mb-5 mx-2 text-start w-1/2'>
            <label
              for='base-input'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Last Name
            </label>
            <input
              type='text'
              name='user_name'
              style={{ width: '100%', boxSizing: 'border-box' }}
              className='bg-white min-w-[20rem] border border-gray-300 text-gray-900 text-sm focus:ring-0 p-2.5 outline-none'
            />
          </div>
        </div>
        <div className='flex w-[100%] justify-between'>
          <div className='mb-5 mx-2 text-start w-1/2'>
            <label
              for='base-input'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              style={{ width: '100%', boxSizing: 'border-box' }}
              className='w-full min-w-[20rem] bg-white border border-gray-300 text-gray-900 text-sm focus:ring-0 p-2.5 outline-none'
            />
          </div>
          <div className='mb-5 mx-2 text-start w-1/2'>
            <label
              for='base-input'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Phone Number
            </label>
            <input
              type='text'
              name='phone'
              style={{ width: '100%', boxSizing: 'border-box' }}
              className='bg-white min-w-[20rem] border border-gray-300 text-gray-900 text-sm focus:ring-0 p-2.5 outline-none'
            />
          </div>
        </div>
        <div className='mb-5 mx-2 text-start w-[100%]'>
          <label
            for='base-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            message
          </label>
          <textarea
            type='text'
            rows={4}
            name='message'
            className='bg-white min-w-[44rem] border border-gray-300 text-gray-900 text-sm focus:ring-0 p-2.5 outline-none'
          ></textarea>
        </div>
        <div className='flex items-center justify-center'>
          <button
            value='Send'
            type='submit'
            className='bg-black text-white hover:bg-transparent border border-black hover:border-black hover:text-black px-4 py-2'
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSupport;
