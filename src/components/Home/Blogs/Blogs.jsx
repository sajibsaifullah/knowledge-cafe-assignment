import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-9 gap-4 container mx-auto'>
            <div className='col-span-6 bg-sky-400'>
                <h2 className='text-center'>This is blog container</h2>
            </div>
            <div className='bg-red-400 col-span-3'>
                <h2>This is side bar</h2>
            </div>
        </div>
    );
};

export default Blogs;