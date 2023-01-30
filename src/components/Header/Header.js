import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='m-[0px 2.5rem] p-[.5rem 0px] align-middle flex justify-between '>
            
                <div className='flex items-center ml-4'>
                <Link to='/'> <img className='w-[80px] cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
                <Link className='hover:text-red-700 m-[20px] text-[1.3rem]' to='/movies/popular'>Popular</Link>
                <Link className='hover:text-red-700 m-[20px] text-[1.3rem]' to='/movies/top_rated'>Top Rated</Link>
                <Link className='hover:text-red-700 m-[20px] text-[1.3rem]' to='/movies/upcoming'>Upcoming</Link>
            </div>
            
        </div>
    );
};

export default Header;