import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Changed to FaMapMarkerAlt

function Inputs() {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row items-center p-4 rounded-lg'>
                <input
                    type='text'
                    placeholder='Search the city here...'
                    className='text-xl font-light p-2 w-80 shadow-inner focus:outline-none capitalize placeholder:lowercase bg-white rounded-l-lg'
                />
                <div className='flex flex-row justify-around gap-4 ml-2'>
                    <CiSearch size={35} className='text-white cursor-pointer transition ease-out hover:scale-110' />
                    <FaMapMarkerAlt size={35} className='text-white cursor-pointer transition ease-out hover:scale-110' />
                </div>
            </div>

            <div className=' flex flex-row w-1/4 items-center gap-4 justify-center'>
                <button name='metric' className=' text-xl text-white font-light'>*C</button>
                <p className=' text-white'> | </p>
                <button name='imperial' className='text-xl text-white font-light'>*F</button>
            </div>
        </div>
    );
}

export default Inputs;
