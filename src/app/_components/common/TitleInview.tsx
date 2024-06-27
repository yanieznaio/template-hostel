"use client"
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'

const TitleInview = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} className={`  ${isInView && "image-reveal visible.image-reveal "} `}>{children}</div>
    )
}

export default TitleInview