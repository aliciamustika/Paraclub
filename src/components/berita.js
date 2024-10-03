import React from 'react';

function Berita() {
    return (
        <div className='flex flex-col items-center py-20'>
            <h1 className='text-5xl font-bold mb-4'>Berita</h1>
            <div className='flex flex-row items-start py-16'>
                <img
                    src="/img/champions.jpeg"
                    alt="Judo"
                    className='h-80 mr-9 rounded-lg'
                />
                <div>
                    <h3 className='text-3xl font-bold max-w-xl mb-7 text-28px'>Lorem ipsum dolor sit amet consectetur. Porta tempor sed nec fames.</h3>
                    <p className='max-w-lg text-base'>Lorem ipsum dolor sit amet consectetur. Duis erat cras morbi velit bibendum in sagittis dictum sem.
                        Suspendisse volutpat volutpat sollicitudin lobortis placerat vehicula. Amet morbi sagittis mauris vulputate
                        vel in consequat amet. Amet risus aliquet porttitor etiam. Ut volutpat sit interdum eget cras cursus nec
                        non arcu. Magnis arcu purus morbi varius molestie facilisis ante at nulla.</p>
                </div>
            </div>
            <div className='flex flex-row items-start'>
                <img
                    src="/img/champions(2).jpeg"
                    alt="Judo"
                    className='h-80 mr-9 rounded-lg'
                    w-full h-64 object-cover mr-9 rounded-lg
                />
                <div>
                    <h3 className='text-3xl font-bold max-w-xl mb-7 text-28px'>Lorem ipsum dolor sit amet consectetur. Porta tempor sed nec fames.</h3>
                    <p className='max-w-lg text-base'>Lorem ipsum dolor sit amet consectetur. Duis erat cras morbi velit bibendum in sagittis dictum sem.
                        Suspendisse volutpat volutpat sollicitudin lobortis placerat vehicula. Amet morbi sagittis mauris vulputate
                        vel in consequat amet. Amet risus aliquet porttitor etiam. Ut volutpat sit interdum eget cras cursus nec
                        non arcu. Magnis arcu purus morbi varius molestie facilisis ante at nulla.</p>
                </div>

            </div>
        </div>

    );
}

export default Berita;