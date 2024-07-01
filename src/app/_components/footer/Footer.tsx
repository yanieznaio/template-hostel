import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black  md:p-4'>
            <div className='md:py-20 md:px-32 border border-white w-full text-white flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col gap-8'>
                    <div>
                        <p>08333</p>
                        <p>Adresse Pays, ville</p>
                    </div>
                    <p>Tel. 0203-2303043</p>
                    <ul className='flex gap-4'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Weather</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex md:gap-8'>
                        <li>Information</li>
                        <li>overview</li>
                        <li>Restaurant</li>
                        <li>stay</li>
                        <li>Acess</li>
                        <li>Faq</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='flex'>
                        <li>Privacy policy</li>
                        <li>Acoomodation policy</li>
                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Footer