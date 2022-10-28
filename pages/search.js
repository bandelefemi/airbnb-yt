import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Search = () => {
  return (
    <div>
      <Header />

      <main className='flex px-6 py-4'>
        <section>
            <p className='text-xs'>300+ stays for 8 people</p>
            <h2 className='text-2xl font-semibold mt-2 mb-6'>
                Stays in Afganistan
            </h2>
            <div className='hidden md:inline-flex'>
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
