"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import TitleInview from '../common/TitleInview'
import Link from 'next/link'
import ParalaxImage from '../common/ParalaxImage'

const Stay = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
    return (
        <div className='bg-[#646865]  mt-32 md:mt-48  py-32 md:py-48 text-white pl-4 md:pl-20'>

            <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0'>

                <TitleInview>
                    <h1>Stay</h1>
                    <p className='flex gap-2 items-center mt-4 md:mt-8 font-serif'><span className='w-8 h-px bg-white' /><span>Villa privé</span></p>
                </TitleInview>


                <div className=' md:w-3/4 '>
                    <div className='h-[300px] md:h-[70vh] w-full  border border-white border-r-0 p-2 pr-0 '>
                        <ParalaxImage />
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row justify-between items-center mt-10'>
                <div className='h-px w-[300px] bg-white -rotate-45 hidden md:block' />
                <div className='md:w-3/4 flex flex-col gap-6 md:pr-60'>
                    <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odio repudiandae laudantium asperiores. Animi mollitia delectus consequuntur quo eaque, ducimus porro. Placeat, ex iure quis saepe nostrum autem maxime iusto.

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quasi ullam quod tenetur, iste commodi nobis atque temporibus, nisi dolorum magni distinctio saepe aliquam deleniti nostrum modi numquam harum cum.
                    </p>

                    <Link href="" className='border-b font-serif font-semibold pb-2 w-fit '>Voir en détails</Link>
                </div>

            </div>

            <div className='mt-20 md:mt-40 flex flex-col-reverse md:flex-row gap-10'>
                <div className='md:mt-20 md:w-[20vw] w-1/2 h-[300px] md:h-[70vh] border border-white p-2'>
                    <ParalaxImage />
                </div>
                <div className='border border-white p-2 w-3/4 md:w-2/3  h-[200px] md:h-[70vh] ml-auto md:ml-0 mr-4 md:mr-0'>
                    <div className='w-full h-full relative '>
                        <Image src="/assets/heroBackground.jpg" fill alt='image' className='object-cover' />

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Stay