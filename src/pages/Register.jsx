import { Link, useNavigate } from 'react-router';
import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const [nameError, setNameError] = useState('')

    const { createUser, setUser, updateUser } = use(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();



        // console.log('submitted')
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name should be more than 5 character')
            return;
        } else {
            setNameError('')
        }
        const photo = form.photo.value;
        const password = form.pass.value;
        // console.log({ email, name, photo, password });

        createUser(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user)
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                    navigate('/')
                }).catch(err => {
                    console.log(err)
                    setUser(user)

                });
            }).catch(err => {
                // console.log(err)
                const errorMessage = err.message;
                alert(errorMessage)
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-center text-2xl'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input required name="name" type="text" className="input" placeholder="Name" />
                        <p className='text-xs text-red-600'>{nameError}</p>
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input required name="photo" type="text" className="input" placeholder="Photo URL" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input required name="email" type="text" className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input required name='pass' type="password" className="input" placeholder="Password" />
                        {/* Submit */}
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-1'>Already Have An Account? <Link className='text-secondary' to='/auth/login'>Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;