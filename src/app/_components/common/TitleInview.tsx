"use client"
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'

const TitleInview = ({ text }: { text: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    return (
        <h1 ref={ref} className={`  ${isInView && "image-reveal visible.image-reveal "} `}>{text}</h1>
    )
}

export default TitleInview