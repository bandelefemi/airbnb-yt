import React, { useState } from 'react'
import Image from 'next/dist/client/image'
import { SearchIcon, UserIcon, UserCircleIcon, 
    MenuIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const Header = () => {

  const [searchInput, setsearchInput] = useState('')
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const [numberOfGuests, setnumberOfGuests] = useState(1)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleSelect =(ranges)=> {
    setstartDate(ranges.selection.startDate)
    setendDate(ranges.selection.endDate)
  }

  // console.log(searchInput)

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
                placeholder='check for a place'
                value={searchInput}
                onChange={(e)=> setsearchInput(e.target.value) } />
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

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect} />

            <div className='flex items-center px-3 mb-4 border-b'>
              <h2 className='font-bold flex-grow'>Number of guests</h2>

              <UsersIcon className='h-5' />
              <input 
                value={numberOfGuests}
                min={1}
                onChange={(e)=> setnumberOfGuests(e.target.value)}
                type={'number'}
                className='w-12 pl-2 outline-none text-lg text-red-400' />

            </div>

            <div className='flex' >
              <button className='flex-grow text-gray-500'>
                Search
              </button>

                
              <button className='flex-grow text-red-400'
                      onClick={(e)=> setsearchInput('')} >
                Cancel
              </button>
                
            </div>
        

            
        </div>
      )}
    </header>
  )
}

export default Header
