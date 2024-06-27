import React from 'react'
import { informations } from '@/app/data/data'
import Link from 'next/link'
import TitleInview from '../common/TitleInview'
const Information = () => {
    return (
        <div className='mt-20 border-t border-black max-w-6xl m-auto pt-10 flex justify-between'>

            <div className='relative '>

                <div className='absolute top-20 -left-20 rotate-[90deg] font-extralight'>

                    <p>Derniéres</p>
                    <h2 className='text-5xl font-serif  font-extralight'>Informations</h2>


                </div>



            </div>




            <div className='w-2/3 flex flex-col gap-14'>
                {
                    informations.map((information, i) => (
                        <div className='flex flex-col md:flex-row md:gap-10 border-b border-black pb-6 '>
                            <div className='flex gap-4 md:gap-0'>
                                <p>{information.date}</p>
                                <p>{information.title}</p>
                            </div>

                            <p>
                                {information.text}
                            </p>

                        </div>
                    ))
                }
                <Link href="/informations" className=' border-b border-black'>Voir tout</Link>

            </div>


        </div>
    )
}

export default Information