import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

const InfoCard = ({img, location, description, star, title, price}) => {
  return (
    <div className='flex'>
        {/* image side left */}
        <div className='w-40 h-24 md:h-52 md:w-80 flex-shrink-0 relative'>
            <Image objectFit='cover'
            src={img} alt='' layout='fill' className='rounded-md' />
        </div>

        {/* desc side right */}
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer' /> 
            </div>
            <h4>{title} </h4>
        </div>
      
    </div>
  )
}

export default InfoCard
