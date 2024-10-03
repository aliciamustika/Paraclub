import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Berita from '../components/berita';
import Event from '../components/event';
import KlubOlahraga from '../components/klubOlahraga';

function Beranda() {
    const [kategori, setKategori] = useState('berita');
    const [activeComponent, setActiveComponent] = useState('');

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center bg-white mt-24'>
                <div className="flex flex-col justify-center items-center">
                    <h2 className='font-bold text-3xl'>ParaClub</h2>
                    <div className='flex flex-col items-center text-7xl font-bold text-center mt-4'>
                        <h1>Mengubah Keterbatasan</h1>
                        <div className='flex items-center'>
                            <h1>Menjadi Kekuatan</h1>
                            <img
                                src='/img/fire.png'
                                alt='fire icon'
                                className='h-36'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img
                        src='/img/kursi-roda.jpeg'
                        alt='kursi roda'
                        className='w-10/12 rounded-xl mt-9'
                    />
                </div>
                <div className='flex flex-col justify-center items-center py-16'>
                    <h3 className='font-bold text-5xl mb-12'>Tentang ParaClub</h3>
                    <p className='max-w-4xl text-base text-center leading-relaxed'>
                        ParaClub dirancang untuk memudahkan para atlet dan komunitas disabilitas dalam
                        menemukan berbagai informasi seputar kegiatan olahraga, fasilitas khusus, serta dukungan profesional.
                        Dengan fitur yang ramah pengguna, Paraclub bertujuan untuk memberdayakan setiap individu agar bisa
                        berpartisipasi aktif dalam olahraga tanpa batasan, memperkuat inklusi, dan mendukung pengembangan
                        bakat para atlet disabilitas.</p>
                </div>
                <div className='flex justify-start ml-20'>
                    <div className='mr-16 text-xl'>
                        <Link to='#' onClick={() => setKategori('berita')}>
                            <button onClick={() => handleComponentChange('berita')}
                                className={`transition duration-300 underline ${activeComponent === 'event' ? 'no-underline' : ''}`}
                            >
                                Berita
                            </button>
                        </Link>
                    </div>
                    <div className='text-xl '>
                        <Link to='#' onClick={() => setKategori('event')}>
                            <button onClick={() => handleComponentChange('event')}
                                className={`transition duration-300 ${activeComponent === 'event' ? 'underline' : ''}`}
                            >
                                Event
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                {kategori === 'berita' && <Berita />}
                {kategori === 'event' && <Event />}
            </div>

            <div className='flex justify-center my-10'>
                <h3 className='text-5xl font-bold mb-10'>Klub Olahraga</h3>
                {/* <div className='relative flex items-center'>
                    <
                </div> */}
            </div>

            <Footer />
        </>
    );
}

export default Beranda;