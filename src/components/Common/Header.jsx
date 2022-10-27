import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='shadow-lg sticky top-0 z-50'>
            <div className="navbar dark:bg-slate-100 dark:text-gray-900 bg-base-100 w-full mx-auto font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to=''>Home</NavLink></li>
                            <li><NavLink to=''>Courses</NavLink></li>
                            <li><NavLink to=''>FAQ</NavLink></li>
                            <li><NavLink to=''>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to='' className="normal-case text-xl"><img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='mx-2 '><NavLink to='/home'>Home</NavLink></li>
                        <li className='mx-2 '><NavLink to='/courses'>Courses</NavLink></li>
                        <li className='mx-2 '><NavLink to='faq'>FAQ</NavLink></li>
                        <li className='mx-2 '><NavLink to='blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? <Link onClick={handleLogOut} to='/signIn' className='btn btn-dark mx-2'>Sign Out</Link>
                            :
                            <div className='mx-2'>
                                <NavLink to='/signIn' className="hover:bg-lime-700 px-4 py-3 rounded-md hover:text-gray-100">Sign In</NavLink>
                                <NavLink to='/signUp' className="btn bg-lime-700 px-4 rounded-md text-gray-100">Sign Up</NavLink>
                            </div>
                    }


                </div>
                <div className="dropdown dropdown-end ml-3">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content  shadow w-52 ">
                        <li>
                            <NavLink to='' className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </NavLink>
                        </li>
                        <li><NavLink to=''>Settings</NavLink></li>
                        <li><NavLink onClick={handleLogOut} to=''>Sign Out</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;