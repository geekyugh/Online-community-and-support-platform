import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import ToastIfy from '../components/common/Toast';

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json()
      console.log('response: ', data);
      if (response.ok) {
        toast('user created successfully')
        navigate("/")
        localStorage.setItem('token',data.token)
        console.log('Signup successful');
      } else {
        // Handle signup error
        toast('something went wrong')
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  return (
    <div className='bg-[#ECFDF3] h-full flex items-center justify-center min-h-[100vh] w-full p-12'>
      <ToastIfy />
      <div className='w-full md:w-[50%] bg-[#FEF3F2] p-12 rounded-lg'>
        <p className="font-bold text-2xl text-center py-4">Log In</p>
        <form className='w-full' onSubmit={handleSubmit}>
          <div class='mb-4'>
            <label
              for='email'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email address
            </label>
            <input
              type='email'
              id='email'
              class='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'
              placeholder='john.doe@company.com'
              required
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div class='mb-4'>
            <label
              for='password'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              class='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'
              placeholder='•••••••••'
              required
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            class='w-full text-white bg-blue-700 hover:bg-blue-800 py-4 rounded-lg'
          >
            Submit
          </button>
          <button onClick={()=>navigate('/Signup')} className="border border-black text-black  px-4 py-2 hover:border-black hover:text-balck my-4 mx-auto">No account? Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
