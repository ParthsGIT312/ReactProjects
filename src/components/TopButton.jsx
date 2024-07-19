import React from 'react'

function TopButton() {

    const cities = [

        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Tokyo'
        },
        {
            id: 3,
            title: 'Toronto'
        },
        {
            id: 4,
            title: 'Mumbai'
        }

    ]

  return (
    <div className=' flex items-center justify-around my-4'>
      {cities.map((city) => (
        <button key={city.id} className=' text-white text-lg font-medium'>{city.title} </button>
      ))}
    </div>
  )
}

export default TopButton
