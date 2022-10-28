import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Search = () => {

  const router = useRouter()

  // console.log(router.query)

  const result = router.query
  return (
    <div>
      <Header />

      <main className='flex'>
        <section className='flex-grow pt-14 px-10'>
            <p className='text-xs'>{`300+ stays for ${result.numberOfGuests}`}</p>
            <h2 className='text-2xl font-semibold mt-2 mb-6'>
                {`stays in ${result.location}`}
            </h2>
            <div className='hidden md:inline-flex mb-5'>
                <p className='button '>
                    Cancellation flexibility
                </p>

                <p className='button'>
                    Type of place
                </p>

                <p className='button '>
                    Price
                </p>

                <p className='button '>
                    Rooms and bed
                </p>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search
