import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        // signOut()
        logOut()
            .then(() => {
                alert('You logged out successfully')
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className='flex justify-between items-center'>
            <div className="">
                {user && user.email}
            </div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-3">
                <img className='btn rounded-full w-12 h-12 p-1' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {
                    user ?
                        <button onClick={handleLogOut} to='/auth/login' className='btn btn-primary px-10'>Logout</button>
                        :
                        <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;