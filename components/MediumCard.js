import Image from 'next/image'
import React from 'react'

const MediumCard = ({img, title}) => {
  return (
    <div className='cursor-pointer hover:scale-105 
    transform transition duration-500 ease-out '>
      {/* top */}

      <div className='relative w-80 h-80 pt-5 '>
        <Image src={img} layout='fill' alt='' className='rounded-xl' />
      </div>

      {/* bottom */}

      <div>
        <h2 className='font-semibold text-gray-500 mt-3'>
          {title}
        </h2>
      </div>

    </div>
  )
}

export default MediumCard
