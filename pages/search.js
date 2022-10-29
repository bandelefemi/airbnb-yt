import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'

const Search = ({searchResults}) => {



  const router = useRouter()

  // console.log(router.query)

  const result = router.query

  const { location, startDate, endDate, numberOfGuests} = router.query

  const formattedStartDate = format(new Date(startDate), "dd MM yyyy")
  const formattedEndDate = format(new Date(endDate), "dd MM yyyy")

  return (
    <div>
      <Header placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | ${numberOfGuests}`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-10'>
            <p className='text-xs'>{`300+ stays ${formattedStartDate}
             - ${formattedEndDate} for ${result.numberOfGuests} people`}</p>
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

            <div className='flex flex-col'>

              {
                searchResults && 
                searchResults.map(({img, location, long, lat, star, 
                  title, description, price, total})=> (
                  <InfoCard key={img}
                            location = {location}
                            img = {img}
                            description = {description}
                            price = {price}
                            long = {long}
                            lat = {lat}
                            title = {title}
                            star = {star}
                             />
                ))
              }

            </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search


export async function getServerSideProps() {

  const https = require('https')
  const searchResults = await fetch("https://links.papareact.com/isz",
  {
    agent: new https.Agent({
      rejectUnauthorized: false,
    })
  }).then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults
    }
  }
}
