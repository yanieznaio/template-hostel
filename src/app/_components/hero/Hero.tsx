import React from 'react'
import Image from 'next/image'
import MaskImage from '../MaskImage'
import { link } from 'fs'
import Link from 'next/link'


const links = [

    {
        href: "/",
        text: "Informations"
    },
    {
        href: "/",
        text: "Photos"
    },
    {
        href: "/",
        text: "Accés"
    },
    {
        href: "/",
        text: "Faq"
    },
    {
        href: "/",
        text: "Contact"
    }

]
const Hero = () => {
    return (
        <>
            <div className="border border-black w-full h-[400px] md:h-[80vh] p-2 rounded">
                <div className="h-full w-full relative image-reveal visible.image-reveal ">
                    <Image src="/assets/heroBackground.jpg" alt="image" fill className="object-cover" />
                </div>
            </div>
            <div className='hidden md:flex justify-end md:gap-14 px-4 py-6 pr-20'>


                {
                    links.map((link, i) => (
                        <Link href={link.href}>{link.text}</Link>
                    ))
                }


            </div>
        </>

    )
}

export default Hero