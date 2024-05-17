import React from 'react';
import { RiseLoader } from 'react-spinners';

const Loader = () => {
    
    return (
        <div className='flex items-center justify-center h-screen w-screen z-40 bg-black'>
            <div className='p-4 rounded-lg'>
            <RiseLoader color="rgba(78, 172, 208, 0.69)" size={20} />
            </div>
        </div>
    );
}

export default Loader;
