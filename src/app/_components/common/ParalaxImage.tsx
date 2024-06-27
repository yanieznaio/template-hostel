"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const ParalaxImage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
    return (
        <div ref={ref} className='w-full h-full overflow-hidden' >
            <div className='w-full h-full overflow-hidden'>
                <motion.div className={`relative w-full h-[110%] md:h-full`} style={{ translateY: translate }} >
                    <div className='relative w-full h-[120%] '>
                        <Image src="/assets/heroBackground.jpg" alt='image' fill className='object-cover' />

                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default ParalaxImage