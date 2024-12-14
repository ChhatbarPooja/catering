import React from 'react'
import { menuData } from '../components/MenuData'
import Footer from '../components/Footer'

const Menu = () => {
  return (
    <div>
      <div className='bg-[#fffcf8] h-60 flex items-center justify-center'>
        <div className='block'>
          <p className='font-playball text-6xl'>Services</p>
          <p className='my-10 text-textPrimary'>Home / Pages /  <span className='text-black'>Services </span></p></div>
      </div>
      <div className='justify-center items-center my-28 bg-[#fffcf8] p-5 lg:p-10'>
        <div className='flex justify-center items-center'>
          <div className='flex-col flex items-center'>
            <p className="uppercase flex justify-center border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-1 px-4">
              Our Menu
            </p>
            <p className='font-playball lg:text-5xl my-8 w-full text-center flex justify-center items-center'>Most Popular Food in the World
            </p>
            <div className='lg:flex grid gap-3 my-8 '>
              <button className="rounded-full border border-[#d4a762] bg-textPrimary font-bold text-black px-10 font-sans text-base py-2">Starter</button>
              <button className="rounded-full border border-[#d4a762] font-bold text-black px-10 font-sans text-base py-2">Main Course</button>
              <button className="rounded-full border border-[#d4a762] font-bold text-black px-10 font-sans text-base py-2">Drinks</button>
              <button className="rounded-full border border-[#d4a762] font-bold text-black px-10 font-sans text-base py-2">Offers</button>
              <button className="rounded-full border border-[#d4a762] font-bold text-black px-10 font-sans text-base py-2">Our Special</button>

            </div>
          </div>
        </div>
        <div className="lg:flex grid gap-20">
      {/* Left Column */}
      <div className="lg:w-1/2 w-[354px]">
        {menuData.slice(0, Math.ceil(menuData.length / 2)).map((item) => (
          <div key={item.id}>
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="rounded-full lg:h-20 lg:w-20 h-12 w-12" />
              <div className="block lg:my-4">
                <div className="lg:ml-10 ml-3 flex justify-between border-dashed border-textPrimary border-b lg:py-3">
                  <p className="lg:text-2xl text-sm">{item.name}</p>
                  <p className="lg:text-2xl text-textPrimary text-sm">{item.price}</p>
                </div>
                <div className="lg:ml-10 ml-3 py-2">
                  <p className='text-sm lg:text-base'>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 w-[354px]">
        {menuData.slice(Math.ceil(menuData.length / 2), menuData.length).map((item) => (
          <div key={item.id}>
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="rounded-full lg:h-20 lg:w-20 h-14 w-14" />
              <div className="block lg:my-4">
                <div className="lg:ml-10 ml-6 flex justify-between  border-dashed border-textPrimary border-b lg:py-3">
                  <p className="lg:text-2xl text-sm">{item.name}</p>
                  <p className="lg:text-2xl text-textPrimary textsm">{item.price}</p>
                </div>
                <div className="lg:ml-10 ml-6 py-2">
                  <p className='text-sm lg:text-base'>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default Menu
