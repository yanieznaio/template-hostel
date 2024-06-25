import React from 'react'
import { slidersImage } from '@/app/data/data'
import Image from 'next/image'
const Slider = () => {
    return (
        <div className='border border-black p-2 max-w-6xl h-[250px]  mt-40 md:mt-60'>
            <div className='h-full m-auto overflow-hidden relative slider '>
                <div className='overflow-hidden flex gap-px w-full h-full slide'>
                    {
                        slidersImage.map((image, i) => (
                            <div className='w-[250px] h-full relative' key={i}>
                                <Image src={image} alt='image' fill className='object-cover' />
                            </div>
                        ))
                    }

                </div>
            </div>



        </div>
    )
}

export default Slider