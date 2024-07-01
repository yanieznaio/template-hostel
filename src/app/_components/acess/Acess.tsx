import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Acess = () => {
    return (
        <div className='flex flex-col md:flex-row md:p-40'>
            <div className='md:w-1/2'>
                <h1>Access</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
                <Link href="" className=''>Google maps</Link>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
                <p>Lorem ipsum dolor sit amet</p>

                <Link href="" className='border border-b'>Voir Details</Link>
            </div>
            <div className='md:w-1/2 relative md:h-[50vh] '>
                <Image src="/assets/heroBackground.jpg" fill alt='image' className='object-cover' />
            </div>
        </div>

    )
}

export default Acess