import React, { use, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState("");

    const { signIn, forgetPassword } = use(AuthContext)
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();


    const emailRef = useRef(null)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});
        signIn(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate(`${location.state ? location.state : '/'}`)
            }).catch(err => {
                const errorCode = err.code;
                const errorMessage = err.message;
                // alert(errorCode, errorMessage);
                setError(errorMessage);
            }
            )
    }

    const handleForgetPass = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        // console.log(email);
        forgetPassword(email)
            .then(() => {
                alert('Check your email to reset password')
            }).catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div className='flex justify-center  items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-center text-2xl'>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input ref={emailRef} required name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input required name='password' type="password" className="input" placeholder="Password" />
                        <div><button onClick={handleForgetPass} className="link link-hover">Forgot password?</button></div>

                        {error && <p className='text-red-600 text-xs'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center pt-1'>Don't Have An Account? <Link className='text-secondary' to='/auth/register'>Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;