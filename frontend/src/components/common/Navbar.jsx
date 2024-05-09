import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link,useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Feed', href: '/feed', current: false },
  { name: 'Seek Help', href: '/seekhelp', current: false },
  {
    name: 'Share your story',
    items: [
      { name: 'Posts', href: '/posts', current: false },
      { name: 'Resource', href: '/rosourses', current: false },
      { name: 'About', href: '/ourmession', current: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);
  const handleLogout = () =>{
    localStorage.clear();
    navigate('/login')
  }
  return (
    <Disclosure as='nav' className='bg-white border-b'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-8xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex w-[40%] items-center justify-between sm:items-stretch sm:justify-start'>
                <div className='hidden sm:block'>
                  <div className='flex items-center space-x-4'>
                    {navigation.map((item) => (
                      <>
                        {item?.items ? (
                          <Menu
                            as='div'
                            className='relative ml-3'
                            key={item.name}
                          >
                            <div>
                              <Menu.Button className='relative flex items-center'>
                                <span
                                  className={classNames(
                                    item.current
                                      ? 'bg-white hover:bg-black hover:text-white'
                                      : 'hover:bg-black hover:text-white',
                                    'rounded-md px-3 py-2  font-medium flex items-center'
                                  )}
                                >
                                  {item.name}
                                  <div className='px-2 pt-1'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      fill='none'
                                      viewBox='0 0 24 24'
                                      strokeWidth={1.5}
                                      stroke='currentColor'
                                      className='w-4 h-4'
                                    >
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='m19.5 8.25-7.5 7.5-7.5-7.5'
                                      />
                                    </svg>
                                  </div>
                                </span>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter='transition ease-out duration-100'
                              enterFrom='transform opacity-0 scale-95'
                              enterTo='transform opacity-100 scale-100'
                              leave='transition ease-in duration-75'
                              leaveFrom='transform opacity-100 scale-100'
                              leaveTo='transform opacity-0 scale-95'
                            >
                              <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                {item?.items?.map((subItem) => (
                                  <Menu.Item key={subItem.name}>
                                    {({ active }) => (
                                      <Link to={subItem.href}>
                                        <span
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2  text-gray-700'
                                          )}
                                        >
                                          {subItem.name}
                                        </span>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        ) : (
                          <Link to={item.href} key={item.name}>
                            <span
                              className={classNames(
                                item.current
                                  ? 'bg-white hover:bg-black hover:text-white'
                                  : 'hover:bg-black hover:text-white',
                                'rounded-md px-3 py-2 font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex w-[20%] font-bold text-lg mx-auto items-center justify-center'>
                Unity
              </div>
              <div className='flex w-[40%] items-center justify-end gap-2'>
                {isAuthenticated ? (
                  <button onClick={handleLogout}
                    className={classNames(
                      'bg-black border border-black text-white hover:bg-white hover:border hover:text-black px-4 py-2  font-medium'
                    )}
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <Link
                      to={'/login'}
                      className={classNames(
                        'bg-black border border-black text-white hover:bg-white hover:border hover:text-black px-4 py-2  font-medium'
                      )}
                    >
                      Log In
                    </Link>
                    <Link
                      to={'/signup'}
                      className={classNames(
                        'bg-white text-balck hover:bg-black border border-black hover:border hover:text-white px-4 py-2  font-medium'
                      )}
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <>
                  {item?.items ? (
                    <Menu as='div' className='relative' key={item.name}>
                      <div>
                        <Menu.Button className='relative flex items-center'>
                          <span
                            className={classNames(
                              'rounded-md px-3 py-2  font-medium flex items-center'
                            )}
                          >
                            {item.name}
                            <div className='px-2 pt-1'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-4 h-4'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='m19.5 8.25-7.5 7.5-7.5-7.5'
                                />
                              </svg>
                            </div>
                          </span>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          {item?.items?.map((subItem) => (
                            <Menu.Item key={subItem.name}>
                              {({ active }) => (
                                <Link to={subItem.href}>
                                  <span
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2  text-gray-700'
                                    )}
                                  >
                                    {subItem.name}
                                  </span>
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Disclosure.Button key={item.name} as='Link' to={item.href}>
                      <span
                        className={classNames(
                          item.current
                            ? 'bg-white hover:bg-black '
                            : 'hover:bg-black hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </span>
                    </Disclosure.Button>
                  )}
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
