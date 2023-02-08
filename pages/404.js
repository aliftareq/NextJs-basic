import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='h-screen'>
            <Image src='/404 page.jpg' className='mx-auto' width={1440} height={400} />
            <Link href='/'><button>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;