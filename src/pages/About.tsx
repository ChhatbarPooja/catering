import React from 'react'
import { PiArrowBendUpRightBold } from "react-icons/pi";
import fact from '../img/fact.jpg'
import event6 from '../img/event-6.jpg';
import Team1 from '../img/team-1.jpg'
import Team2 from '../img/team-2.jpg'
import Team3 from '../img/team-3.jpg'
import Team4 from '../img/team-4.jpg'
import { FaCheck, FaLongArrowAltRight, FaUsers } from "react-icons/fa";
import { FaRegCirclePlay } from 'react-icons/fa6';
import { LiaUsersCogSolid } from 'react-icons/lia';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <div className='bg-[#fffcf8] h-60 flex items-center justify-center'>
        <div className='block'>
          <p className='font-playball text-6xl'>About Us</p>
          <p className='my-10 text-textPrimary'>Home / Pages /  <span className='text-black'>About </span></p></div>
      </div>
      <div>

        <div className='lg:flex mt-10 lg:mx-20'>
          <div className='md:w-1/2 flex justify-center md:mt-0 px-4'>
            <img src={event6} className="object-cover  lg:w-[500px] lg:h-[500px]" />
          </div>
          <div className='lg:w-1/2 mt-10'>
            <div className='text-center block'>
              <p className="uppercase inline-block border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-2 px-20 text-sm">
                About Us
              </p>
              <p className='font-playball text-2xl lg:text-4xl  py-5 flex justify-center'>Trusted By 200 + satisfied clients</p></div>
            <p className='font-sans text-[#0000008C] lg:text-base flex flex-start text-center'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
            <div className='lg:block mt-5 grid justify-center'>
              <div className='lg:flex gap-10 lg:py-5 '>
                <p className='flex'><PiArrowBendUpRightBold className='text-[#d4a762] h-5 w-5 mt-0.5 mr-2' />Fresh and Fast food Delivery</p>
                <p className='flex'><PiArrowBendUpRightBold className='text-[#d4a762] h-5 w-5 mt-0.5 mr-2' />24/7 Customer Support</p>
              </div>
              <div className='lg:flex gap-10'>
                <p className='flex'><PiArrowBendUpRightBold className='text-[#d4a762] h-5 w-5 mt-0.5 mr-2' /><span><p className='flex-start'>Easy Customization Options</p></span></p>
                <p className='flex'><PiArrowBendUpRightBold className='text-[#d4a762] h-5 w-5 mt-0.5 mr-2' />Delicious Deals for Delicious Meals</p>
              </div>
            </div>
            <div className='flex justify-center'>
              <button className="rounded-full bg-[#d4a762] font-bold text-black px-12 mt-8 font-sans text-base py-3 flex items-center justify-center">About Us
                <div className='ml-2'><FaLongArrowAltRight /></div>
              </button>
            </div>
          </div>
        </div>

        <div className='lg:flex justify-center gap-8 items-center lg:py-40'>
          <div className="lg:flex grid justify-center gap-3 my-4">
            <div className="bg-[#d4a762] flex flex-col items-center space-y-3 p-10 lg:w-[230px] w-[356px] rounded-lg my-5">
              <FaUsers className="h-20 w-20 text-white" />
              <p className="text-4xl font-bold font-playball">689</p>
              <p className="uppercase">Happy Customers</p>
            </div>

            <div className="bg-[#d4a762] flex flex-col items-center space-y-3 p-10 lg:w-[230px] w-[356px]  rounded-lg my-5">
              <LiaUsersCogSolid className="h-20 w-20 text-white" />
              <p className="text-4xl font-bold font-playball">107</p>
              <p className="uppercase">Expert Chefs</p>
            </div>

            <div className="bg-[#d4a762] flex flex-col items-center space-y-3 p-10 lg:w-[230px] w-[356px]  rounded-lg my-5">
              <FaCheck className="h-20 w-20 text-white" />
              <p className="text-4xl font-bold font-playball">253</p>
              <p className="uppercase">Events Complete</p>
            </div>
          </div>

          <div className="flex relative lg:w-1/3 mx-10 rounded-lg">
            <img src={fact} alt="fact" className='rounded-lg' />
            <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-white" />
          </div>

        </div>

        <div className='mb-10 mx-5'>
          <div className='lg:my-5  mx-0 my-16 lg:mx-5'>
            <div className='justify-center items-center'>
              <div className='flex justify-center items-center'>
                <div className='block text-center'>
                  <p className="uppercase inline-block border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-2 px-10 text-sm">
                    Our Team
                  </p>
                  <p className='font-playball text-2xl lg:text-5xl py-5'>We have experienced chef Team</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                <div className="relative flex flex-col items-center">
                  <img src={Team1} className='rounded-lg' />
                  <div className="absolute bottom-0 bg-black bg-opacity-100 text-white w-full text-center py-2 rounded">
                    <p className="font-bold text-2xl text-textPrimary">Henery</p>
                    <p className="text-base text-white font-extrabold">Decoration Chef</p>
                  </div>
                </div>

                <div className="shadow-lg flex flex-col items-center">
                  <div className="relative flex flex-col items-center">
                    <img src={Team2} className='rounded-lg' />
                    <div className="absolute bottom-0 bg-black bg-opacity-100 text-white w-full text-center py-2 rounded">
                      <p className="font-bold text-2xl text-textPrimary">Jemes Born</p>
                      <p className="text-base text-white font-extrabold">Executive Chef</p>
                    </div>
                  </div>
                </div>

                <div className="shadow-lg flex flex-col items-center">
                  <div className="relative flex flex-col items-center">
                    <img src={Team3} className='rounded-lg' />
                    <div className="absolute bottom-0 bg-black bg-opacity-100 text-white w-full text-center py-2 rounded">
                      <p className="font-bold text-2xl text-textPrimary">Martin Hill</p>
                      <p className="text-base text-white font-extrabold">Kitchen Porter</p>
                    </div>
                  </div>

                </div>

                <div className="shadow-lg flex flex-col items-center">
                  <div className="relative flex flex-col items-center">
                    <img src={Team4} className="rounded-lg" alt="Team Member" />

                    <div className="absolute bottom-0 bg-black bg-opacity-100 text-white w-full text-center py-2 rounded ">

                      <p className="font-bold text-2xl text-textPrimary">Adam Smith</p>
                      <p className="text-base text-white font-extrabold">Head Chef</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About
