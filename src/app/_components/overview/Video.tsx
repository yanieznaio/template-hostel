import Image from 'next/image'
import React from 'react'

const Video = () => {
    return (
        <div className='border border-black p-2  mt-10 md:mt-20 relative group cursor-pointer mx-4 md:mx-0'>
            <div className=' relative w-full h-[240px] md:h-[90vh]'>
                <Image src="/assets/heroBackground.jpg" fill alt="image" className='object-cover' />

            </div>
            <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 p-10  md:w-20 md:h-20 md:p-20 flex justify-center items-center text-white font-serif  '>
                <p>
                    voir vidéo
                </p>
                <div className='rounded-full border border-white h-full w-full p-10 md:p-20 absolute group-hover:scale-110 transition-scale ease-[cubic-bezier(0.25,1,0.5,1)] duration-[0.8s]'>

                </div>

            </div>
        </div>

    )
}

export default Video