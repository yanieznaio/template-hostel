import React from 'react'
import Image from 'next/image'
import MaskImage from '../MaskImage'
const Hero = () => {
    return (
        <div className="border border-black w-full h-[400px] md:h-[80vh] p-2 rounded">
            <div className="h-full w-full relative image-reveal visible.image-reveal ">
                <Image src="/photorealistic-wooden-house-with-timber-structure.jpg" alt="image" fill className="object-cover" />
            </div>



        </div>
    )
}

export default Hero