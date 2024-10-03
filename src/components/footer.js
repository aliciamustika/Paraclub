import React from 'react';

function Footer() {
    return (
        <div className='bg-black min-h-56 rounded-t-2xl'>
            <div className='flex flex-row'>
                <h1 className='text-lime-300 font-bold text-4xl ml-20 mb-1 mt-9'>Logo</h1>
                <div className='flex flex-col'>
                    <h4 className='text-lime-300 font-semibold text-xl mt-10 ml-52'>Jelajahi</h4>
                    <button className='text-white text-base ml-52 mt-4'>Tentang kami</button>
                    <button className='text-white text-base ml-44 mt-4'>Beranda</button>
                    <button className='text-white text-base ml-48 mt-4'>Komunitas</button>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-lime-300 font-semibold text-xl mt-10 ml-44'>Layanan</h4>
                    <button className='text-white text-base ml-40 mt-4'>Bantuan</button>
                </div>
                <div>
                    <h4 className='text-lime-300 font-semibold text-xl mt-10 ml-36'>Buat Akun</h4>
                    
                    <h4 className='text-lime-300 font-semibold text-xl mt-10 ml-36'>Sosial media</h4>
                </div>
            </div>
            <p className='text-lime-300 text-sm ml-20 mb-8'>Hak Cipta @Lorem</p>
            <div className='flex flex-col ml-52'>

            </div>
        </div>

    );
}

export default Footer;