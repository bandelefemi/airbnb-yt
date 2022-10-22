import React from 'react'
import Image from 'next/dist/client/image'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] 
    lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
      <Image 
       src={'https://links.papareact.com/0fm'} 
       alt=''
       layout='fill'
       objectFit='cover' 
       />
       <div className='absolute top-1/2 w-full text-center' >
        <p>Not sure where to go? Perfect!</p>
        <button className='py-4 px-10 bg-white hover:shadow-lg
         active:scale-90 transition duration-200 
        text-purple-500 rounded-full shadow-md font-bold my-3' >
            I am Flexible
        </button>
       </div>
    </div>
  )
}

export default Banner
