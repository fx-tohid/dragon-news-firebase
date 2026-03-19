import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playImage from '../../assets/playground.png';
const Qzone = () => {
    return (
        <div className='bg-base-200 p-4 py-9'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img className='w-11/12 mx-auto' src={swimmingImage} alt="" />
                <img className='w-11/12 mx-auto' src={classImage} alt="" />
                <img className='w-11/12 mx-auto' src={playImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;