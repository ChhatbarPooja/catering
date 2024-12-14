import React, { SetStateAction, useEffect, useState } from 'react'
import event1 from '../img/event-1.jpg';
import event2 from '../img/event-2.jpg';
import event3 from '../img/event-3.jpg';
import event4 from '../img/event-4.jpg';
import event5 from '../img/event-5.jpg';
import event6 from '../img/event-6.jpg';
import event7 from '../img/event-7.jpg';
import event8 from '../img/event-8.jpg';
import bg from '../img/background-site.jpg'
import ReactSelect from '../components/Select';
import TextField from '../components/Text';
import Footer from '../components/Footer';
import { GetCountries, GetState, GetCity } from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';
import { events, foodCategory, foodTypes } from '../components/MenuData';


const Events = () => {
  const [event, setEvent] = useState();
  const [foodType, setFoodType] = useState('');
  const [foodCategories, setFoodCategories] = useState('');
  const [contact, setContact] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [countriesList, setCountriesList] = useState<any[]>([]);
  const [stateList, setStateList] = useState<any[]>([]);
  const [cityList, setCityList] = useState<any[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countries = await GetCountries();
        setCountriesList(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const countryId = countriesList.find(c => c.name === selectedCountry)?.id || 0;
      if (countryId) {
        GetState(countryId).then((states: SetStateAction<any[]>) => {
          setStateList(states);
        });
      }
    }
  }, [selectedCountry, countriesList]);

  useEffect(() => {
    if (selectedState) {
      const countryId = countriesList.find(c => c.name === selectedCountry)?.id || 0;
      const stateId = stateList.find(s => s.name === selectedState)?.id || 0;
      if (countryId && stateId) {
        GetCity(countryId, stateId).then((cities: SetStateAction<any[]>) => {
          setCityList(cities);
        });
      }
    }
  }, [selectedState, stateList, selectedCountry, countriesList]);


  return (
    <div>
      <div className='bg-[#fffcf8] h-60 flex items-center justify-center'>
        <div className='block'>
          <p className='font-playball text-6xl'>Services</p>
          <p className='my-10 text-textPrimary'>Home / Pages /  <span className='text-black'>Services </span></p></div>
      </div>

      <div className="flex justify-center items-center py-10">
        <div className="block text-center">
          <p className="uppercase inline-block border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-2 px-20 text-sm">
            Latest Events
          </p>
          <p className="font-playball lg:mt-10 text-center text-3xl lg:text-5xl py-5 max-w-[800px]">
            Contact Us For Any Queries!
          </p>
        </div>
      </div>

      <div className='justify-center items-center'>
        <div className='flex justify-center items-center'>
          <div className='lg:flex grid gap-10 lg:my-7'>
            <button className="rounded-full border border-[#d4a762] bg-textPrimary font-bold text-black px-8 font-sans text-base py-2">All Events</button>
            <button className="rounded-full border border-[#d4a762] font-bold text-black px-8 font-sans text-base py-2">Wedding</button>
            <button className="rounded-full border border-[#d4a762] font-bold text-black px-8 font-sans text-base py-2">Corporate</button>
            <button className="rounded-full border border-[#d4a762] font-bold text-black px-8 font-sans text-base py-2">Cocktail</button>
            <button className="rounded-full border border-[#d4a762] font-bold text-black px-8 font-sans text-base py-2">Buffet</button>

          </div>
        </div>
        <div className=''>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="flex flex-col items-center">
              <img src={event1} alt="event" className='rounded-lg' />
            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event2} alt="event" className='rounded-lg' />
              </div>
            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event3} alt="event" className='rounded-lg' />
              </div>

            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event4} alt="event" className='rounded-lg' />
              </div>

            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event5} alt="event" className='rounded-lg' />
              </div>
            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event6} alt="event" className='rounded-lg' />
              </div>

            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event7} alt="event" className='rounded-lg' />
              </div>

            </div>

            <div className="shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={event8} alt="event" className='rounded-lg' />
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className='container  bg-[#fffcf8]'>
        <div className="flex justify-between items-center border border-textPrimary">
          <div className='opacity-35'>
            <img src={bg} alt="event" className='lg:flex hidden' />
          </div>
          <div>
            <div className='flex-col flex items-center lg:py-5 py-4'>
              <p className="uppercase flex justify-center border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-1 px-4">
                Book Us
              </p>
              <p className='font-playball lg:text-5xl my-8 w-full text-center'>Where you want Our Services
              </p>

            </div>
            <div className='flex lg:justify-between lg:w-[1000px] gap-2 mx-5 flex-wrap justify-center'>

              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                }}
                className="mb-4 block w-[300px] border border-textPrimary rounded-md shadow-sm  sm:text-sm p-2"
              >
                <option value="" disabled>Select Country</option>
                {countriesList.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>

              <select className="mb-4 block w-[300px] border border-textPrimary rounded-md shadow-sm  sm:text-sm p-2"
                id="state"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value)
                }}
              >
                <option value='' disabled>Select State</option>
                {stateList.map((item, index) => (
                  <option key={index} value={item.value}> {item.name}</option>
                ))}

              </select>

              <select className='mb-4 block w-[300px] border border-textPrimary rounded-md shadow-sm  sm:text-sm p-2'
                id='city'
                value={selectedCity}
                onChange={(e)=> setSelectedCity(e.target.value)}

              >
                <option>Select City</option>
                {cityList.map((item, index) => (
                  <option key={index} value=''>{item.name}
                  </option>

                ))}
              </select>
              <ReactSelect
                label="Select an Event"
                options={events}
                value={events.find(e => e.value === event)} // Ensure the value is matched correctly
                onChange={(selectedOption: any) => setEvent(selectedOption.value)}  // Set the value correctly
                placeholder="Choose an event"
                
              />

              <ReactSelect
                label="Select an Event"
                options={foodCategory}
                value={foodType}
                onChange={(e:any)=> setFoodType(e.target.value)}
                placeholder="Choose an event"
              />

              <ReactSelect
                label="Select an Event"
                options={foodTypes}
                value={foodCategories}
                onChange={(e:any)=> setFoodCategories(e.target.value)}
                placeholder="Choose an event"
              /> 

              <TextField
                name=""
                value={contact}
                placeholder="Your Contact No."
                type="text"
                onChange={(event: any) => setContact(event.target.value)}
                className="w-[300px]" />

              <TextField
                name=""
                placeholder="DD/MM/YYYY"
                type="date"
                className="w-[300px]"
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
            <img src={bg} alt="event" className='lg:flex hidden' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events
