import React from 'react'
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

import { FaTemperatureHigh } from "react-icons/fa6";
import { FaTemperatureLow } from "react-icons/fa";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";



function TempAndDetails() {
  return (

    <div>



      <div className=' flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p> Cloudy </p>
      </div>

      <div className=' flex flex-row items-center justify-between text-white py-3'>
        <img className=' w-20' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fsun%2520png&psig=AOvVaw1jzQvBsgZQ0nflcX9T2nje&ust=1724083665845000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODwzqb2_ocDFQAAAAAdAAAAABAE" alt="imae-error" />
        <p className=' text-4xl'> 34 *C</p>

        <div className='flex flex-col space-y-2'>
          <div className='flex items-center'>
            Real Felt:
            <CiTempHigh size={20} className='ml-1 mr-1' />
            <span className='font-medium'>32 *C</span>
          </div>
          <div className='flex items-center'>
            Humidity:
            <WiHumidity size={20} className='ml-1 mr-1' />
            <span className='font-medium'>32 *C</span>
          </div>
          <div className='flex items-center'>
            Wind:
            <FaWind size={20} className='ml-1 mr-1' />
            <span className='font-medium'>32 *C</span>
          </div>
        </div>

      </div>

      <div className='flex flex-row items-center justify-between text-white mt-5'>
        <div className='flex items-center font-light'>
          <span className='mr-1'>Rise:</span>
          <span>6:00 AM</span>
          <WiSunrise size={20} className='ml-1' />
        </div>

        <span>|</span>

        <div className='flex items-center font-light'>
          <span className='mr-1'>Set:</span>
          <span>6:00 PM</span>
          <TbSunset2 size={20} className='ml-1' />
        </div>

        <span>|</span>

        <div className='flex items-center font-light'>
          <span className='mr-1'>High</span>
          <span>30°C</span>
          <FaTemperatureHigh size={20} className='ml-1' />
        </div>

        <span>|</span>

        <div className='flex items-center font-light'>
          <span className='mr-1'>Low</span>
          <span>18°C</span>
          <FaTemperatureLow size={20} className='ml-1' />
        </div>
      </div>


    </div>

  )
}

export default TempAndDetails
