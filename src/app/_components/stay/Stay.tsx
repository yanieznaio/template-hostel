"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import TitleInview from '../common/TitleInview'

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
                    <div ref={ref} className=' border border-white p-2 md:h-[70vh] w-full h-[300px]overflow-hidden'>
                        <div className='w-full h-full overflow-hidden'>
                            <motion.div className={`relative w-full h-full`} style={{ translateY: translate }} >
                                <div className='relative w-full h-[120%] '>
                                    <Image src="/assets/heroBackground.jpg" alt='image' fill className='object-cover' />

                                </div>
                            </motion.div>

                        </div>


                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos quia, amet dicta porro laborum quasi tempora molestias praesentium, quod, repellendus voluptates corporis aspernatur cumque sapiente? Veniam odio dolorum amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odio repudiandae laudantium asperiores. Animi mollitia delectus consequuntur quo eaque, ducimus porro. Placeat, ex iure quis saepe nostrum autem maxime iusto.

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quasi ullam quod tenetur, iste commodi nobis atque temporibus, nisi dolorum magni distinctio saepe aliquam deleniti nostrum modi numquam harum cum.
                        </p>
                    </div>
                </div>


            </div>




        </div>
    )
}

export default Stay