import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>login with</h2>
            <div className="space-y-3">

                {/* Google */}
                <button className="btn btn-outline btn-secondary w-full">
                    <FcGoogle size={23} />
                    Login with Google
                </button>

                {/* GitHub */}
                <button className='btn btn-outline btn-primary w-full'>
                    <FaGithub size={23}/>
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;