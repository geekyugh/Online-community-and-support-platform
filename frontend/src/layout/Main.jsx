import React from 'react';
import Navbar from '../components/common/Navbar';

const Main = ({children}) => {
  return (
    <div>
      <Navbar />
        <div className='flex w-full'>{children}</div>
    </div>
  );
};

export default Main;
