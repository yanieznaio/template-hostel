import Link from 'next/link'
import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
const Header = () => {
    return (
        <div className='flex px-8 py-8 justify-between '>
            <div className='flex md:gap-20'>
                <Link href="/" className=''>Hotel</Link>
                <p className='hidden md:block'>Chambres d'hôtes</p>
            </div>

            <div className=' flex gap-4 '>
                <Link href="/" className='border border-black px-2 py-px bg-white hover:bg-black hover:text-white transition-colors ease duration-[0.5s] hidden md:flex items-center gap-2'><span>Reserver</span><span><CiPhone /></span></Link>
                <Link href="/" className='border border-black px-2 py-px bg-white hover:bg-black hover:text-white transition-colors ease duration-[0.5s] hidden md:flex gap-2 items-center'><span>Appeler </span><span><CiCalendar /></span></Link>
                <button className='uppercase'>Menu</button>
            </div>


        </div>
    )
}

export default Header