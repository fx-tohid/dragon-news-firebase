import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className=' my-3 flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-bold mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis aliquam consectetur officia ipsam excepturi illum aut quas quae ratione?</p>
                <p className='font-bold mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis aliquam consectetur officia ipsam excepturi illum aut quas quae ratione?</p>
                <p className='font-bold mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis aliquam consectetur officia ipsam excepturi illum aut quas quae ratione?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;