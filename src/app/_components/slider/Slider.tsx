import React from 'react'
import { slidersImage } from '@/app/data/data'
import Image from 'next/image'
const Slider = () => {
    return (
        <div className='border border-black p-2 md:max-w-6xl 2xl:max-w-[1500px] w-[90vw] h-[300px]  mt-40 md:mt-60 rounded-sm'>
            <div className="w-full h-full inline-flex flex-nowrap overflow-hidden">
                <ul className="flex gap-px items-center justify-center md:justify-start  [&_img]:max-w-none h-full  animate-infinite-scroll">
                    {
                        slidersImage.map((image, i) => (
                            <li className='relative h-full w-[350px]' key={i}>
                                <Image src={image} alt="=image" fill />
                            </li>
                        ))
                    }


                </ul>
                <ul className="flex gap-px items-center justify-center md:justify-start  [&_img]:max-w-none h-full animate-infinite-scroll" aria-hidden="true">
                    {
                        slidersImage.map((image, i) => (
                            <li className='relative h-full w-[350px]' key={i}>
                                <Image src={image} alt="=image" fill />
                            </li>
                        ))
                    }


                </ul>
            </div>




        </div>
    )
}

export default Slider