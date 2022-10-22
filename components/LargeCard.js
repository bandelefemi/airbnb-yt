import Image from 'next/image'
import React from 'react'


const LargeCard = ({img, title, description, buttonText}) => {
  return (

    <section className='relative py-16'>
        <div className='relative min-w-[300px] h-96'>
            <Image 
            src={img} layout='fill' alt=''
             objectFit='cover' className='rounded-2xl' />
         </div>

         <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <button>{buttonText}</button>
         </div>
    </section>
    
  )
}

export default LargeCard
