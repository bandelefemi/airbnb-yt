import React from 'react'
import Image from 'next/dist/client/image'
import { SearchIcon, UserIcon, UserCircleIcon, 
    MenuIcon, GlobeAltIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 
                    bg-white shadow-md py-5 px-5 md:px-10 '>

      {/* left */}
      <div className='relative flex items-center 
                h-10 cursor-pointer my-auto'>
        <Image
            src={'https://links.papareact.com/qd3'}
            alt=''
            layout='fill'
            objectFit='contain'
            objectPosition={'left'}
        />
      </div>

      {/* middle */}
      <div className='flex items-center border-2 rounded-full py-2 shadow-lg '>
        <input type={'text'} className='pl-5 bg-transparent outline-none 
                flex-grow text-sm text-gray-500 placeholder-gray-400'
                placeholder='check for a place'/>
                <SearchIcon className='h-8 hidden md:inline-flex bg-red-400 
                                cursor-pointer mr-2  
                                text-white rounded-full p-2'/>
      </div>

      {/* right */}
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline'>Become a host</p>
        <GlobeAltIcon 
            className='h-6'
        />
        <div className='flex border-2 space-x-2 cursor-pointer rounded-full p-2'>
            <MenuIcon className='h-6 '/>
            <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header
