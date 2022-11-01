import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const InfoCard = ({img, location, description, star, title, price, total}) => {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer first:border-t 
    hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out'>
        {/* image side left */}
        <div className='w-64 h-44 md:h-52 md:w-80 flex-shrink-0 relative'>
            <Image objectFit='cover'
            src={img} alt='' layout='fill' className='rounded-md' />
        </div>

        {/* desc side right */}
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between text-sm'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer' /> 
            </div>
            <h4 className='text-xl font-semibold'>{title} </h4>

            <div className='border-b w-10 pt-2' />

            <div className='pt-2 text-gray-500 flex-grow'>
                <p className='text-xs'>{description}</p>
            </div>

            <div className='flex pt-5'>
                <p className='flex flex-grow items-center'>
                    <StarIcon className='h-5 text-red-400' />
                    {star}
                </p>

                <div>
                    <p className='text-lg font-semibold'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default InfoCard
