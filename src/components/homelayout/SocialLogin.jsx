import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const SocialLogin = () => {

    const { signInPopup } = use(AuthContext);


    const googleSignIn = () => {
        signInPopup(googleProvider)
            .then(res => {
                // console.log(res)
            }).catch(err => {
                console.log(err.message)
            })
    }

    const githubSignIn = () => {
        signInPopup(githubProvider)
            .then(res => {
                // console.log(res)
            }).catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <h2 className='font-bold mb-5'>login with</h2>
            <div className="space-y-3">

                {/* Google */}
                <button onClick={googleSignIn} className="btn btn-outline btn-secondary w-full">
                    <FcGoogle size={23} />
                    Login with Google
                </button>

                {/* GitHub */}
                <button onClick={githubSignIn} className='btn btn-outline btn-primary w-full'>
                    <FaGithub size={23} />
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;