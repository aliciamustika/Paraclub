import React from 'react';

function Navbar() {
    return (
        <div className='flex bg-white min-h-24 items-center justify-between sticky top-0 z-50'>
            <h1 className='font-bold text-5xl ml-20 py-2 mb-1'>Logo</h1>
            <div className='flex justify-center items-center space-x-14 flex-1'>
                <button className='text-xl'>Klub</button>
                <button className='text-xl'>Pelatih</button>
            </div>
            <div className='flex justify-end mr-20'>
                <button className='bg-lime-300 text-black text-xl font-bold py-3 pl-7 pr-7 rounded-md'>Masuk</button>
            </div>
        </div>

    );
}

export default Navbar;