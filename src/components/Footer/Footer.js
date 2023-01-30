import React from 'react';

const Footer = () => {
    const y = new Date();
    const year = y.getFullYear();
    return (
        <div className='text-center my-8 border border-red-700 rounded-lg p-4 mx-11'>
             <h1>&copy; Copyright All {year} <span className='text-red-800'>Rubel Mollah</span></h1>
        </div>
    );
};

export default Footer;