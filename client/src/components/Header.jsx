import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Real-Estate</span>
                        <span className='text-slate-700'>Site</span>
                    </h1>
                </Link>
                <form className='flex items-center border border-slate-200 rounded-lg px-2 py-1 bg-white'>
                    <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='inline ml-2 text-slate-600' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                    </Link>
                    <Link to='/profile'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>Profile</li>
                    </Link>
                    <Link to='/signin'>
                        <li className='text-slate-700 hover:underline'>Sign In</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;