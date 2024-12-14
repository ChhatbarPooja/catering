import React, { useState } from 'react';
import hero from "../img/hero.png";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { FaHamburger, FaFacebookF, FaLongArrowAltRight, FaPizzaSlice, FaUtensils, FaWalking, FaWheelchair, FaWineGlassAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { LiaUsersCogSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import fact from '../img/fact.jpg'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaCheese } from "react-icons/fa6";
import { CiHotdog } from "react-icons/ci";
import event1 from '../img/event-1.jpg';
import event2 from '../img/event-2.jpg';
import event3 from '../img/event-3.jpg';
import event4 from '../img/event-4.jpg';
import event5 from '../img/event-5.jpg';
import event6 from '../img/event-6.jpg';
import event7 from '../img/event-7.jpg';
import event8 from '../img/event-8.jpg';
import menu1 from '../img/menu-01.jpg';
import menu2 from '../img/menu-02.jpg';
import menu3 from '../img/menu-03.jpg';
import menu4 from '../img/menu-04.jpg';
import menu5 from '../img/menu-05.jpg';
import menu6 from '../img/menu-06.jpg';
import menu7 from '../img/menu-07.jpg';
import menu8 from '../img/menu-08.jpg';
import menu9 from '../img/menu-09.jpg';
import bg from '../img/background-site.jpg'
import ReactSelect from '../components/Select';
import TextField from '../components/Text';
import Testimonial from '../img/testimonial-1.jpg'
import Testimonial2 from '../img/testimonial-2.jpg'
import Testimonial3 from '../img/testimonial-3.jpg'
import Testimonial4 from '../img/testimonial-4.jpg'
import Team1 from '../img/team-1.jpg'
import Team2 from '../img/team-2.jpg'
import Team3 from '../img/team-3.jpg'
import Team4 from '../img/team-4.jpg'
import { menuData } from '../components/MenuData'
import Footer from '../components/Footer';
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
const events = [
  { id: 1, label: 'Wedding', value: 'wedding' },
  { id: 2, label: 'Birthday Party', value: 'birthday_party' },
  { id: 3, label: 'Corporate Event', value: 'corporate_event' },
];

const foodTypes = [
  { id: 1, label: 'Italian', value: 'italian' },
  { id: 2, label: 'Mexican', value: 'mexican' },
  { id: 3, label: 'Indian', value: 'indian' },
];

const places = [
  { id: 1, label: 'New York', value: 'new_york' },
  { id: 2, label: 'San Francisco', value: 'san_francisco' },
  { id: 3, label: 'Los Angeles', value: 'los_angeles' },
];


const Home = () => {
  const [event, setEvent] = useState('');
  const [foodType, setFoodType] = useState('');
  const [place, setPlace] = useState('');
  const [contact, setContact] = useState('');

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#fffcf8]">

        {/* Text Block */}
        <div className="flex flex-col space-y-6 md:w-1/2 px-10 ">
          <div className="flex lg:justify-start justify-center">
            <div className="my-6">
              <p className="uppercase border-[1px] border-[#d4a762] rounded-full  text-[#050709] font-bold py-1 px-4">
                Welcome to CaterServ
              </p>
            </div>
          </div>
          <div className="animate-bounce-once">
            <p className="text-[#050709] font-playball leading-tight mb-4 text-7xl md:text-7xl lg:text-[90px] capitalize">
              Book <span className="text-[#d4a762]">Cater</span>Serv for your dream event
            </p>
          </div>
          <div className='flex gap-3'>
            <button className="rounded-full bg-[#d4a762] font-bold text-black px-10 font-sans text-base py-4">Book Now</button>
            <button className="rounded-full bg-[#d4a762] font-bold text-black px-10 font-sans text-base py-4">Know More</button>

          </div>
        </div>

        {/* Image Block */}
        <div className="md:w-1/2 flex justify-center md:mt-0 px-4">
          <img src={hero} alt="Hero" className="object-cover mt-28 lg:w-[500px] lg:h-[500px]" />
        </div>
      </div>
      <div className='lg:flex mt-20 lg:mx-20'>
        <div className='md:w-1/2 flex justify-center md:mt-0 px-4'>
          <img src={event6} className="object-cover  lg:w-[500px] lg:h-[500px]" />
        </div>
        <div className='lg:w-1/2 mt-5'>
          <div className='text-center block'>
            <p className="uppercase inline-block border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-2 px-20 text-sm">
              About Us
            </p>
            <p className='font-playball text-2xl lg:text-4xl  py-5 flex justify-center'>Trusted By 200 + satisfied clients</p></div>
          <p className='font-sans text-[#0000008C] lg:text-base flex flex-start text-center'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
          <div className='lg:block mt-5 grid justify-center'>
            <div className='lg:flex gap-10 lg:py-10'>
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

      <div className='lg:flex justify-center gap-8 items-center lg:py-20'>
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

      <div className='justify-center items-center'>
        <div className='flex justify-center items-center py-10'>
          <div className='block text-center'>
            <p className="uppercase inline-block border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-2 px-10 text-sm">
              our services            </p>
            <p className='font-playball flex justify-center text-2xl lg:text-5xl lg:py-5 py-3'>What We Offer</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:p-4">
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

      <div className='justify-center items-center my-10 lg:my-28'>
        <div className='flex justify-center items-center'>
          <div className='block text-center'>
            <p className="uppercase inline-block border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-2 px-10 text-sm">
              Latest Events
            </p>
            <p className='font-playball lg:text-5xl text-2xl lg:py-5 py-3 flex justify-center items-center'>Contact Us For Any Queries!

            </p>
            <div className='lg:flex grid lg:gap-10 gap-4 lg:my-14'>
              <button className="rounded-full border border-[#d4a762] bg-textPrimary font-bold text-black px-8 font-sans text-base py-2">All Events</button>
              <button className="rounded-full border border-[#d4a762] font-bold text-black px-8 font-sans text-base py-2">Wedding</button>
              <button className="rounded-full border border-[#d4a762] font-bold text-black px-8 font-sans text-base py-2">Corporate</button>
              <button className="rounded-full border border-[#d4a762] font-bold text-black px-8 font-sans text-base py-2">Cocktail</button>
              <button className="rounded-full border border-[#d4a762] font-bold text-black px-8 font-sans text-base py-2">Buffet</button>

            </div>
          </div>
        </div>
        <div className=''>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="flex flex-col items-center">
              <img src={event1} className='rounded-lg' />
            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event2} className='rounded-lg' />
              </div>
            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event3} className='rounded-lg' />
              </div>

            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event4} className='rounded-lg' />
              </div>

            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event5} />
              </div>
            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event6} className='rounded-lg' />
              </div>

            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event7} className='rounded-lg' />
              </div>

            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event8} className='rounded-lg' />
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className='justify-center items-center lg:my-28 my-10 bg-[#fffcf8] lg:p-10 p-5'>
        <div className='flex justify-center items-center'>
          <div className='flex-col flex items-center'>
            <p className="uppercase flex justify-center border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-1 px-10">
              Our Menu
            </p>
            <p className='font-playball text-2xl lg:text-5xl lg:my-8 my-4  w-full text-center flex justify-center items-center'>Most Popular Food in the World
            </p>
            <div className='lg:flex grid gap-3 my-5 lg:my-8 '>
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

      {/* Book Us block */}
      <div className='container  bg-[#fffcf8]'>
        <div className="flex justify-between items-center lg:border border-textPrimary">
          <div className='opacity-35'>
            <img src={bg} className='lg:flex hidden' />
          </div>
          <div>
            <div className='flex-col flex items-center lg:py-5 py-4'>
              <p className="uppercase flex justify-center border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-1 px-10">
                Book Us
              </p>
              <p className='font-playball lg:text-5xl my-8 w-full text-center'>Where you want Our Services
              </p>

            </div>
            <div className='flex lg:justify-between lg:w-[1000px] gap-2 mx-5 flex-wrap justify-center'>
              <ReactSelect
                label="Select an Event"
                options={events}
                value={event}
                onChange={setEvent}
                placeholder="Choose an event"
              />
              <ReactSelect
                label="Select an Event"
                options={events}
                value={event}
                onChange={setEvent}
                placeholder="Choose an event"
              />
              <ReactSelect
                label="Select an Event"
                options={events}
                value={event}
                onChange={setEvent}
                placeholder="Choose an event"
              />
              <ReactSelect
                label="Select an Event"
                options={events}
                value={event}
                onChange={setEvent}
                placeholder="Choose an event"
              />
              <ReactSelect
                label="Select an Event"
                options={events}
                value={event}
                onChange={setEvent}
                placeholder="Choose an event"
              /> <ReactSelect
                label="Select an Event"
                options={events}
                value={event}
                onChange={setEvent}
                placeholder="Choose an event"
              />
              <TextField
                name=""
                placeholder="Your Contact No."
                type="text"
                className="w-[300px]"
                onChange={(event: any) => setContact(event.target.value)} />
              <TextField
                name=""
                className="w-[300px]"
                placeholder="DD/MM/YYYY"
                type="date"
                onChange={(event: any) => setContact(event.target.value)} />

              <TextField
                name=""
                placeholder="Enter Your Email"
                type="text"
                className="w-[300px]"
                onChange={(event: any) => setContact(event.target.value)} />
            </div>
            <div className='flex justify-center my-4'>
              <button className="items-center rounded-full bg-[#d4a762] font-bold text-black px-10 font-sans text-base py-4">Submit Now</button>
            </div>
          </div>
          <div className='opacity-35'>
            <img src={bg} className='lg:flex hidden ' />
          </div>
        </div>
      </div>
      <div className='lg:my-10  mx-7 my-16 lg:mx-5'>
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
            <div className="relative flex flex-col items-center rounded-lg overflow-hidden cursor-pointer group">
              <img src={Team1} className="rounded-lg" />
              <div className='absolute flex items-end bg-textPrimary p-3 rounded-full right-1 top-1'>
              <div className='block'>
                <FaShareAlt />
              </div>
            </div>
            
              <div className='absolute flex items-end bg-textPrimary p-3 rounded-full right-1 top-12'>
              <div className='block'>
                <FaFacebookF />
              </div>
            </div>

              <div className='absolute flex items-end bg-textPrimary p-3 rounded-full right-1 top-[92px]'>
              <div className='block'>
                <FaInstagram />
              </div>
            
              
              </div>
              <div className="absolute bottom-0 bg-black bg-opacity-100 text-white w-full text-center py-2">
              
              <div>
                <p className="font-bold text-2xl text-textPrimary">Henery</p>
                <p className="text-base text-white font-extrabold">Decoration Chef</p>
                </div>
              </div>
              {/* <div className="absolute inset-0 bg-textPrimary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
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
      {/* <div className='my-20 mx-20'>
        <div className=''>
          <div className='flex justify-center items-center'>
            <div className='block'>
              <p className="uppercase flex justify-center border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-1 px-10">
                Testimonial          </p>
              <p className='font-playball lg:text-5xl py-5'>What Our Customers says!</p>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <div className="">
                <div className="testimonial-carousel">
                  <div className="testimonial">
                    <img src={event1} alt="Person 1" />
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>
                  <div className="testimonial">
                    <img src="img/testimonial-1.jpg" alt="Person 1" />
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>     <div className="testimonial">
                    <img src="img/testimonial-1.jpg" alt="Person 1" />
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>
                 
                  <div className="testimonial">
                    <img src="img/testimonial-2.jpg" alt="Person 2" />
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div> <div className="testimonial">
                    <img src="img/testimonial-1.jpg" alt="Person 1" />
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>
                  <div className="testimonial">
                    <img src="img/testimonial-2.jpg" alt="Person 2" />
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>
                  <div className="testimonial">
                    <img src="img/testimonial-3.jpg" alt="Person 3" />
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>

  );
};

export default Home;
