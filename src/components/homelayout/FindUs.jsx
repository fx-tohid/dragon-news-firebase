import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold my-5'>Find us on</h2>
            <div>
                <div className="join w-full join-vertical">
                    <button className="btn justify-start px-6  bg-base-100 join-item"><FaFacebook /> Facebook</button>
                    <button className="btn justify-start px-6  bg-base-100 join-item"><FaTwitter /> Twitter</button>
                    <button className="btn justify-start px-6  bg-base-100 join-item"><FaInstagram /> Instagram</button>
                </div> 
            </div>
        </div>
    );
};

export default FindUs;