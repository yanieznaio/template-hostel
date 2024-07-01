import Image from 'next/image'
import React from 'react'

const Experience = () => {
    return (
        <div className=''>
            <div className='flex mt-40 flex-col md:flex-row px-4 md:px-20 items-center'>

                <div className='md:w-1/2 md:p-14'>
                    <h1>Lorem </h1>
                    <p className='flex gap-4 items-center mt-6'><span className='h-px w-10 bg-black '></span><span>Lorem ipsum color</span></p>

                    <p className='mt-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam saepe recusandae omnis sit nemo aliquid ab consequuntur veniam adipisci tenetur iure explicabo, rem qui illum corporis doloremque dignissimos, est illo.

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus magni reiciendis. Animi, explicabo? Totam dolores modi quidem ipsa illo. Tempore fugit cupiditate minima sit nesciunt, nisi amet minus illum!
                    </p>
                </div>
                <div className='w-full md:w-1/2  md:h-[50vh] relative'>
                    <Image src="/assets/heroBackground.jpg" alt="image" className="object-cover" fill />
                </div>
            </div>


        </div>

    )
}

export default Experience



const SliderImage = () => {
    return (
        <div className='border border-black p-2'>
            <div className='relative md:w-[20vw] md:h-[30vh]'>
                <Image src="assets/heroBackground.jpg" className='object-cover' alt="image" fill />
            </div>
        </div>
    )
}