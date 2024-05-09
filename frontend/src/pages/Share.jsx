// const data = {
//   title: formData.title,
//   description: formData.description,
//   type: isOnline,
//   typeofharrassment: formData.typeofharrassment.join(','),
//   wherehappend: formData.wherehappend,
//   whyhappend: formData.whyhappend.join(','),
//   image: formData.image,
// };
import React, { useEffect, useState } from 'react';
import Main from '../layout/Main';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Share = () => {
  const navigate = useNavigate();
  const token1 = localStorage?.getItem('token');
  const [isOnline, setIsOnline] = useState(true);
  console.log('isOnline: ', isOnline);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    typeofharrassment: [],
    wherehappend: '',
    whyhappend: [],
    image: null,
  });
  console.log('formData: ', formData);
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      type: isOnline,
    }));
  }, [formData.type]);

  console.log('formData: ', formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (type, checked) => {
    setFormData((prevData) => {
      let updatedSelectedHarassmentTypes = [...prevData.typeofharrassment];
      if (checked) {
        updatedSelectedHarassmentTypes.push(type);
      } else {
        updatedSelectedHarassmentTypes = updatedSelectedHarassmentTypes.filter(
          (item) => item !== type
        );
      }
      return {
        ...prevData,
        typeofharrassment: updatedSelectedHarassmentTypes,
      };
    });
  };

  const whyhappendboxChange = (type, checked) => {
    setFormData((prevData) => {
      let updatedSelectedHarassmentTypes = [...prevData.whyhappend];
      if (checked) {
        updatedSelectedHarassmentTypes.push(type);
      } else {
        updatedSelectedHarassmentTypes = updatedSelectedHarassmentTypes.filter(
          (item) => item !== type
        );
      }
      return {
        ...prevData,
        whyhappend: updatedSelectedHarassmentTypes,
      };
    });
  };
  const handleRadioChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const postData = async (e) => {
    e.preventDefault();
    const postformData = new FormData();
    postformData.append('title', formData.title);
    postformData.append('description', formData.description);
    postformData.append('type', isOnline);
    postformData.append(
      'typeofharrassment',
      formData.typeofharrassment.join(',')
    );
    postformData.append('wherehappend', formData.wherehappend);
    postformData.append('whyhappend', formData.whyhappend.join(','));
    postformData.append('image', formData.image);
    try {
      const response = await fetch('http://localhost:5000/api/posts/post', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          token: token1,
        },
        body: postformData,
      });

      if (response.ok) {
        // Handle success
        toast('Post created Successfully');
        const data = await response.json();
        navigate('/post', { state: { data: data } });
      } else {
        // Handle errors
        toast('somthing went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Main>
      <Toast />
      <div className='w-full h-full'>
        <div className='w-full min-h-[80vh] h-full flex flex-col bg-[#FEF3F2] px-8'>
          <div className='w-full  h-full px-4 sm:px-12 flex flex-col justify-center py-6'>
            <p className='font-[500] w-full sm:w-[70%] md:w-[40%] mx-auto text-[20px] sm:font-[700] sm:text-[40px] text-center'>
              Share Your Story
            </p>
            <p className='font-[400] w-full ms:w-[70%] md:w-[60%] mx-auto text-center text-[12px] sm:text-[18px] py-3'>
              Sharing your story on our platform is proven to reduce trauma for
              you -- and it helps others too, by letting them know they are not
              alone. Right To Be's vetted community of bystanders can also
              provide tangible support in the form of supportive messages,
              reporting, and documenting abusive content online.
            </p>
          </div>
          <div className='flex w-full gap-4 max-w-[90%] mx-auto p-4'>
            <div className='w-[48%] bg-[#B66363] p-5 rounded-lg'>
              <p className='font-bold text-2xl '>How Does it Work</p>
              <ol className='list-decimal p-4'>
                <li className='text-[18px] font-[400]'>
                  Identify if the harassment was online or offline. If you want
                  to submit an online harassment story, you need to become a
                  member.
                </li>
                <li className='text-[18px] font-[400]'>
                  Share your story. If offline, log out if you would like to
                  share your story anonymously.
                </li>
                <li className='text-[18px] font-[400]'>
                  Our moderators will review your story and you'll get a notice
                  when it's approved.
                </li>
                <li className='text-[18px] font-[400]'>
                  Your story will be shared with our community.
                </li>
                <li className='text-[18px] font-[400]'>
                  If you share an online harassment story, you will be able to
                  add a help request.{' '}
                </li>
              </ol>
            </div>
            <div className='w-[48%] bg-[#B66363] p-5 rounded-lg'>
              <p className='font-bold text-2xl '>Privacy and Security</p>
              <ol className='list-decimal p-4'>
                <li className='text-[18px] font-[400]'>
                  When sharing your story, you have the option to choose what
                  name you display or to share completely anonymously.
                </li>
                <li className='text-[18px] font-[400]'>
                  Right To Be staff members moderate all activity on this
                  platform, including new member accounts, story submissions,
                  and comments.
                </li>
                <li className='text-[18px] font-[400]'>
                  We work extremely hard to ensure that our community and data
                  remain safe and that the vulnerability of the members of the
                  Right To Be community are protected.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className='w-full h-full flex flex-col bg-[#ECFDF3] px-8'>
          <div className='w-full  h-full px-4 sm:px-12 flex flex-col justify-center py-6'>
            <p className='font-[500] w-full mx-auto text-[20px] sm:font-[700] sm:text-[40px]'>
              STEP 1: TYPES OF HARRASMENT
            </p>
            <p className='font-[500] w-full mx-auto text-[20px] sm:font-[600] sm:text-[32px]'>
              What type of story do you want to share
            </p>
            <div className='flex items-center gap-2 py-4'>
              <button
                onClick={() => setIsOnline(true)}
                className={
                  isOnline
                    ? 'bg-black text-white hover:bg-transparent border border-black hover:border-black hover:text-black hover:border px-4 py-2'
                    : 'bg-transparent text-black hover:bg-black hover:text-white border hover:border-black border-black px-4 py-2'
                }
              >
                ONLINE
              </button>
              <button
                onClick={() => setIsOnline(false)}
                className={
                  isOnline
                    ? 'bg-transparent text-black hover:bg-black hover:text-white border hover:border-black border-black px-4 py-2'
                    : 'bg-black text-white hover:bg-transparent border border-black hover:border-black hover:text-black hover:border px-4 py-2'
                }
              >
                OFFLINE
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-full flex flex-col bg-[#ECFDF3] px-8'>
          <div className='w-full  h-full px-4 sm:px-12 flex flex-col justify-center py-6'>
            <p className='font-[500] w-full mx-auto text-[20px] sm:font-[700] sm:text-[40px]'>
              STEP 2: ADD DETAILS
            </p>
            <form
              onSubmit={postData}
              className='w-full'
              encType='multipart/form-data'
            >
              <div className='mb-4'>
                <label
                  htmlFor='first_name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Please Provide the title of the story
                </label>
                <input
                  type='text'
                  id='first_name'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'
                  placeholder='John'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='first_name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Please Share your story about recieving the harassment
                </label>
                <textarea
                  rows={4}
                  id='first_name'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'
                  placeholder='John'
                  value={formData.description}
                  name='description'
                  onChange={handleChange}
                  required
                />
              </div>
              {isOnline ? (
                <>
                  <p className='block mb-2 text-2xl font-semibold text-gray-900 dark:text-white'>
                    Upload ScreenShot of Harrasment
                  </p>
                  <div className='flex items-start gap-2 w-[50%] py-4'>
                    <input
                      type='file'
                      className=' border text-gray-900 text-sm  block p-4 border-0'
                      name='image'
                      accept='image/*'
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      {/* Attach File */}
                    </label>
                  </div>
                </>
              ) : (
                <></>
              )}
              <p className='block mb-2 text-2xl font-semibold text-gray-900 dark:text-white'>
                What was the type of harassment
              </p>
              {isOnline ? (
                <div className='flex items-start mb-4 flex-wrap justify-between'>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'verbal Harassment',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Verbal Harrasment
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Cyberstalking', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Cyberstalking
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Hate Speech', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Hate Speech
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Hacking', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Hacking
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Doxxing', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Doxxing
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Zoom Bombing', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Zoom Bombing
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Threat of Violance',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Threat of Voilance
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Swatting', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Swatting
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Defamation', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Defamation
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Sexual Harrassment',
                          e.target.checked
                        )
                      }
                    />

                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Sexual Harrasment
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Others', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Others
                    </label>
                  </div>
                </div>
              ) : (
                <div className='flex items-start mb-4 flex-wrap justify-between'>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Micro Agression',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Microagression
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Offesive Social',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Offensive Social
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Verbal Harrasment',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Verbal Harrasment
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Election Hate', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Election Hate
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Shamin Or Humailating',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Shamin or Humailating
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Street Harrasment',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Street Harrsment
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Bulling', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Bulling
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Racist Slurs', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Racist Slurs
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Offensive Rekegious Remarks',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Offensive Relegious Remarks
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange(
                          'Staliking Assault',
                          e.target.checked
                        )
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Stalking Assault
                    </label>
                  </div>
                  <div className='flex items-start gap-2 w-[50%] py-2'>
                    <input
                      type='checkbox'
                      id='first_name'
                      className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                      placeholder='John'
                      onChange={(e) =>
                        handleCheckboxChange('Other', e.target.checked)
                      }
                    />
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Others
                    </label>
                  </div>
                </div>
              )}
              <p className='block mb-2 text-2xl font-semibold text-gray-900 dark:text-white'>
                Why DO you think this happened?
              </p>
              <div className='flex flex-col items-start mb-4 flex-wrap justify-between'>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Misogyny', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Misogyny
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Racism', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Racism
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Homophobia', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Homophobia
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Transphobia', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Transphobia
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Classism', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Classism
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Inti Immigrant', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Inti Immigrant
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange(
                        'Relegius Descrimination',
                        e.target.checked
                      )
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Relegious Descrimination
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Sizesm', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Sizeism
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Ableism', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Ableism
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='checkbox'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    onChange={(e) =>
                      whyhappendboxChange('Other', e.target.checked)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Other
                  </label>
                </div>
              </div>
              <p className='block mb-2 text-2xl font-semibold text-gray-900 dark:text-white'>
                Where Did the Harrasment
              </p>
              <div className='flex flex-col items-start mb-4 flex-wrap justify-between'>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='radio'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    value='work'
                    name='location'
                    onChange={(e) =>
                      handleRadioChange('wherehappend', e.target.value)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Work
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='radio'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    name='location'
                    value='School'
                    onChange={(e) =>
                      handleRadioChange('wherehappend', e.target.value)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    School
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='radio'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    name='location'
                    value='Public Place'
                    onChange={(e) =>
                      handleRadioChange('wherehappend', e.target.value)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Public Place
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='radio'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    name='location'
                    value='semi public'
                    onChange={(e) =>
                      handleRadioChange('wherehappend', e.target.value)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Semi Public
                  </label>
                </div>
                <div className='flex items-start gap-2 w-[50%] py-2'>
                  <input
                    type='radio'
                    id='first_name'
                    className='w-5 h-5 bg-white border black  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4'
                    placeholder='John'
                    name='locaiton'
                    value='Others'
                    onChange={(e) =>
                      handleRadioChange('wherehappend', e.target.value)
                    }
                  />
                  <label
                    htmlFor='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Others
                  </label>
                </div>
              </div>
              <button type='submit' className='flex bg-[#B66363] py-3 px-6'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Share;

function Toast() {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
