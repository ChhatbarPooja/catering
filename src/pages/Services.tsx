import React from 'react'
import { CiHotdog } from 'react-icons/ci'
import { FaCheese, FaHamburger, FaPizzaSlice, FaUtensils, FaWalking, FaWheelchair, FaWineGlassAlt } from 'react-icons/fa'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
    <div className=''>
      <div className='bg-[#fffcf8] h-60 flex items-center justify-center'>
        <div className='block'>
          <p className='font-playball text-6xl'>Services</p>
          <p className='my-10 text-textPrimary'>Home / Pages /  <span className='text-black'>Services </span></p></div>
      </div>
      <div className='justify-center items-center'>
        <div className='flex justify-center items-center py-10'>
          <div className='block'>
            <p className="uppercase flex justify-center border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-1 px-10">
              Our Services
            </p>
            <p className='font-playball flex justify-center lg:text-5xl py-5'>What We Offer</p>
          </div>
        </div>
        <div className=''>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="shadow-lg flex flex-col items-center space-y-3 p-10">
              <FaCheese className="h-20 w-20 text-textPrimary" />
              <p className="text-2xl font-bold">Wedding Services</p>
              <p className="text-[16px] text-[#9A9A9A]">Contrary to popular belief, ipsum is not simply random.</p>
              <button className="rounded-full bg-[#d4a762] font-bold  text-black px-6 font-sans text-base py-2 cursor-pointer">Read More</button>
            </div>

            <div className="shadow-lg flex flex-col items-center space-y-3 p-10">
              <FaPizzaSlice className="h-20 w-20 text-textPrimary" />
              <p className="text-2xl font-bold">Corporate Catering</p>
              <p className="text-[16px] text-[#9A9A9A]">Contrary to popular belief, ipsum is not simply random.</p>
              <button className="rounded-full bg-[#d4a762] font-bold  text-black px-6 font-sans text-base py-2 cursor-pointer">Read More</button>

            </div>

            <div className="shadow-lg flex flex-col items-center space-y-3 p-10">
              <CiHotdog className="h-20 w-20 text-textPrimary" />
              <p className="text-2xl font-bold">Cocktail Reception</p>
              <p className="text-[16px] text-[#9A9A9A]">Contrary to popular belief, ipsum is not simply random.</p>
              <button className="rounded-full bg-[#d4a762] font-bold  text-black px-6 font-sans text-base py-2 cursor-pointer">Read More</button>

            </div>

            <div className="shadow-lg flex flex-col items-center space-y-3 p-10">
              <FaHamburger className="h-20 w-20 text-textPrimary" />
              <p className="text-2xl font-bold">Bento Catering</p>
              <p className="text-[16px] text-[#9A9A9A]">Contrary to popular belief, ipsum is not simply random.</p>
              <button className="rounded-full bg-[#d4a762] font-bold  text-black px-6 font-sans text-base py-2 cursor-pointer">Read More</button>

            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="shadow-lg flex flex-col items-center space-y-3 p-10">
              <FaWineGlassAlt className="h-20 w-20 text-textPrimary" />
              <p className="text-2xl font-bold">Pub Party</p>
              <p className="text-[16px] text-[#9A9A9A]">Contrary to popular belief, ipsum is not simply random.</p>
              <button className="rounded-full bg-[#d4a762] font-bold  text-black px-6 font-sans text-base py-2 cursor-pointer">Read More</button>
            </div>

            <div className="shadow-lg flex flex-col items-center space-y-3 p-10">
              <FaWalking className="h-20 w-20 text-textPrimary" />
              <p className="text-2xl font-bold">Home Delivery</p>
              <p className="text-[16px] text-[#9A9A9A]">Contrary to popular belief, ipsum is not simply random.</p>
              <button className="rounded-full bg-[#d4a762] font-bold  text-black px-6 font-sans text-base py-2 cursor-pointer">Read More</button>

            </div>

            <div className="shadow-lg flex flex-col items-center space-y-3 p-10">
              <FaWheelchair className="h-20 w-20 text-textPrimary" />
              <p className="text-2xl font-bold">Sit-down Catering</p>
              <p className="text-[16px] text-[#9A9A9A]">Contrary to popular belief, ipsum is not simply random.</p>
              <button className="rounded-full bg-[#d4a762] font-bold  text-black px-6 font-sans text-base py-2 cursor-pointer">Read More</button>

            </div>

            <div className="shadow-lg flex flex-col items-center space-y-3 p-10">
              <FaUtensils className="h-20 w-20 text-textPrimary" />
              <p className="text-2xl font-bold">Buffet Catering</p>
              <p className="text-[16px] text-[#9A9A9A]">Contrary to popular belief, ipsum is not simply random.</p>
              <button className="rounded-full bg-[#d4a762] font-bold  text-black px-6 font-sans text-base py-2 cursor-pointer">Read More</button>

            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer />

    </>
  )
}

export default Services
