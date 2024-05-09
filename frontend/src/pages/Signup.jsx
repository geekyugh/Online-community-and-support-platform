import React, { useState } from 'react';
import useToast from '../hook/useToast';
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const showToast = useToast();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      return
    }
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Handle successful signup
        showToast('user created successfully', 'success')
        navigate("/login")
        console.log('Signup successful', 'error');
      } else {
        // Handle signup error
        showToast('something went wrong')
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='bg-[#ECFDF3] h-full flex items-center justify-center min-h-[100vh] w-full p-12'>
      <div className='w-full md:w-[50%] bg-[#FEF3F2] p-12 rounded-lg'>
        <p className="font-bold text-2xl text-center py-4">Sign Up</p>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'
              placeholder='John'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'
              placeholder='john.doe@company.com'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'
              placeholder='•••••••••'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='confirm_password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Confirm password
            </label>
            <input
              type='password'
              id='confirm_password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'
              placeholder='•••••••••'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-blue-700 hover:bg-blue-800 py-4 rounded-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
