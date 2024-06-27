"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import TitleInview from '../common/TitleInview'
import Video from './Video'

const Overview = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
    return (
        <div className='container'>


            <TitleInview>
                <h1>Overview</h1>
            </TitleInview>
            <p className='flex gap-4 items-center font-serif mt-8'><span className='w-10 h-px bg-black' /> <span>A propos</span></p>
            <p className='mt-10 md:w-3/4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat a sequi cum illo laborum dignissimos dolorem voluptatem ducimus delectus culpa soluta, facere saepe iure tenetur aliquam corporis numquam cumque.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ea illum quam, quas cupiditate aut dolores perferendis voluptatum accusantium eum autem repellendus aliquam repudiandae excepturi optio sit praesentium. Quidem, earum.
            </p>
            <div className='flex md:flex-row flex-col w-full justify-between mt-10'>

                <Link href="/" className='border-b border-black'>Voir plus</Link>
                <div className='border border-black rounded-sm p-2 md:w-2/3'>

                    <div className='relative h-[300px]'>
                        <Image src="/assets/heroBackground.jpg" fill alt='img' className="object-cover grayscale-[90%]" />
                    </div>
                </div>
            </div>

            <div ref={ref} className={`mt-10 h-[500px] md:h-[120vh] w-full relative ${isInView && "image-reveal visible.image-reveal "}`}>
                <Image alt="img" src="/assets/map_pc_en.svg" fill className='object-contain' />

            </div>
            <Video />
        </div>
    )
}

export default Overview 