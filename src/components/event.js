import React from 'react';

function Event() {
    return (
        <div className='flex flex-col items-center py-20'>
            <h1 className='text-5xl font-bold mb-4'>Event</h1>
            <div className='flex flex-row items-start py-16'>
                <img
                    src='/img/paris.jpeg'
                    alt=''
                    className='h-96 rounded-lg mr-7'
                />
                <div className='flex flex-col'>
                    <p className='text-lg max-w-lg'>Indonesia akan mengirimkan 35 atlet yang siap bersaing di 10 cabang olahraga (cabor)
                        dalam <span className="font-bold">Paralimpiade Paris 2024.</span> Saksikan Pada:</p>

                    <div className='flex flex-row bg-gray-100 rounded-lg py-2 justify-between items-center mt-7'>
                        <h3 className=' ml-4 font-bold text-base'>Para Badminton</h3>
                        <h3 className='font-bold text-base mr-4'>29 Agt 2024 - 2 Sept 2024</h3>
                    </div>

                    <div className='flex flex-row bg-gray-100 rounded-lg py-2 justify-between items-center mt-7'>
                        <h3 className=' ml-4 font-bold text-base'>Boccia</h3>
                        <h3 className='font-bold text-base mr-4'>29 Agt 2024 - 5 Sept 2024</h3>
                    </div>

                    <div className='flex flex-row bg-gray-100 rounded-lg py-2 justify-between items-center mt-7'>
                        <h3 className=' ml-4 font-bold text-base'>Para Panahan</h3>
                        <h3 className='font-bold text-base mr-4'>29 Agt 2024 - 5 Sept 2024</h3>
                    </div>

                    <div className='flex flex-row bg-gray-100 rounded-lg py-2 justify-between items-center mt-7'>
                        <h3 className=' ml-4 font-bold text-base'>Para Renang</h3>
                        <h3 className='font-bold text-base mr-4'>29 Agt 2024 - 7 Sept 2024</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;