import React from 'react'
import Image from 'next/image'

const SmallCard = ({img, location, distance}) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-2 rounded-xl hover:scale-105 
                cursor-pointer hover:bg-gray-100 
                transition duration-500 transform ease-out'>
      {/* left */}

      <div className='relative w-16 h-16'>
        <Image src={img} layout='fill' alt='' className='rounded-lg'/>
      </div>

      {/* right */}

      <div>
        <h2 className='font-bold'>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
