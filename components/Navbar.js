import React from 'react'

import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div>
        
<nav className="bg-[#0c314d] border-[#134e7a] border-b-2 ">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        
        <div className="flex items-center">
            <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav>
<nav className="bg-[#0c314d]">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center justify-between">
            {/* div for logo of Your Organisation */}
            <a href="/hero" className="flex items-center">
            <img src="https://1xbet.ng/genfiles/cms/pg/173/images/04965acab0aa3b7d541e91dc24021341.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-end text-xs font-semibold whitespace-nowrap dark:text-white">Nigeria</span>
        </a>

            {/* ul classes for links */}
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Sports
                    </a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                    
                </li>
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Live</a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                </li>
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Cricket</a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                </li>
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Promo</a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                </li>
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Casino</a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                </li>
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline"> Live Casino</a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                </li>
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">1XGames</a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                </li>
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">E-Sports</a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                </li>
                <li className='flex flex-row  space-x-1 textm-md font-medium'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">More</a>
                    <ChevronDownIcon className='h-[18px] w-[15px] text-white'/>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

export default Navbar