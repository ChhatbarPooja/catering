import { FaCheck, FaClock, FaFacebookF, FaPhone, FaTwitter } from 'react-icons/fa'
import { RiMapPin2Line } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import menu1 from '../img/menu-01.jpg';
import menu2 from '../img/menu-02.jpg';
import menu3 from '../img/menu-03.jpg';
import menu4 from '../img/menu-04.jpg';
import menu5 from '../img/menu-05.jpg';
import menu6 from '../img/menu-06.jpg';

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='lg:flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 p-4  justify-center items-center gap-3'>
                <div className='lg:w-1/4 block items-center justify-center leading-4'>
                    <p className='font-playball text-4xl mb-4 flex justify-center'>Cater <span className='text-textPrimary'>Serv</span></p>
                    <p className='text-[#9A9A9A] lg:p-0 p-2 flex justify-center text-base font-sans ml-2 break-words text-center' >There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.
                    </p>
                    <div className='flex gap-2 justify-center'>
                        <p className='text-base font-sans mt-3 h-10 w-10 bg-textPrimary rounded-full flex items-center justify-center ' >
                            <FaFacebookF className='rounded-full h-4 w-4' />
                        </p>
                        <p className='text-base font-sans mt-3 h-10 w-10 bg-textPrimary rounded-full flex items-center justify-center ' >
                            <FaTwitter className='rounded-full h-4 w-4' />
                        </p>
                        <p className='text-base font-sans mt-3 h-10 w-10 bg-textPrimary rounded-full flex items-center justify-center ' >
                            <FaInstagram className='rounded-full h-4 w-4' />
                        </p>
                        <p className='text-base font-sans mt-3 h-10 w-10 bg-textPrimary rounded-full flex items-center justify-center ' >
                            <ImLinkedin2 className='rounded-full h-4 w-4' />
                        </p>
                    </div>
                </div>
                <div className='lg:w-1/4 block'>
                    <p className='lg:mt-0 mt-4 justify-center flex font-bold text-[#050709] font-sans text-2xl mb-4'>Special Facilities
                    </p>
                    <div className='grid justify-center'>

                    <p className='flex py-2'><FaCheck className="h-5 w-5 mt-1 text-textPrimary" />
                        <span className='text-[#9A9A9A]  text-base font-sans ml-2'>Cheese Burger</span></p>
                    <p className='flex py-2'><FaCheck className="h-5 w-5 mt-1 text-textPrimary" />
                        <span className='text-[#9A9A9A]  text-base font-sans ml-2'>Sandwich</span></p>
                    <p className='flex py-2'><FaCheck className="h-5 w-5 mt-1 text-textPrimary" />
                        <span className='text-[#9A9A9A]  text-base font-sans ml-2'>Burger</span></p>
                    <p className='flex py-2 '><FaCheck className="h-5 w-5 mt-1 text-textPrimary" />
                        <span className='text-[#9A9A9A]  text-base font-sans ml-2'>Special Sweets</span></p>
                </div>
                </div>
                <div className='lg:w-1/4 block'>
                    <p className='lg:mt-0 mt-4 font-bold justify-center flex text-[#050709] font-sans text-2xl mb-4'>Contact Us
                    </p>
                    <div className='grid justify-center'>

                    <p className='flex py-2'><RiMapPin2Line className="h-5 w-5 mt-1 text-textPrimary" />
                        <span className='text-[#9A9A9A]  text-base font-sans ml-2'> 123 Street, New York, USA</span></p>
                    <p className='flex py-2'><FaPhone className="h-5 w-5 mt-1 text-textPrimary" />
                        <span className='text-[#9A9A9A]  text-base font-sans ml-2'> (+012) 3456 7890 123</span></p>
                    <p className='flex py-2'><IoMail className="h-5 w-5 mt-1 text-textPrimary" />
                        <span className='text-[#9A9A9A]  text-base font-sans ml-2'> info@example.com</span></p>
                    <p className='flex py-2'><FaClock className="h-5 w-5 mt-1 text-textPrimary" />
                        <span className='text-[#9A9A9A]  text-base font-sans ml-2'>26/7 Hours Service</span></p>
                </div></div>
                <div className='lg:w-1/4 block'>
                    <p className='font-bold flex justify-center text-[#050709] font-sans text-2xl mb-4 mt-5'>Social Gallery</p>
                    <div className='flex lg:justify-between justify-center gap-3 py-2'>
                        <div className='border border-textPrimary p-2 rounded-full'>
                            <img src={menu1} alt="" className='rounded-full w-16 h-16 object-cover' />
                        </div>
                        <div className='border border-textPrimary p-2 rounded-full'>
                            <img src={menu2} alt="" className='rounded-full w-16 h-16 object-cover' />
                        </div>
                        <div className='border border-textPrimary p-2 rounded-full'>
                            <img src={menu3} alt="" className='rounded-full w-16 h-16 object-cover' />
                        </div>
                    </div>
                    <div className='flex lg:justify-between justify-center gap-3'>
                        <div className='p-2 border border-textPrimary rounded-full'>
                            <img src={menu4} alt="" className='rounded-full w-16 h-16 object-cover' />
                        </div>
                        <div className='p-2 border border-textPrimary rounded-full'>
                            <img src={menu5} alt="" className='rounded-full w-16 h-16 object-cover' />
                        </div>
                        <div className='p-2 border border-textPrimary rounded-full'>
                            <img src={menu6} alt="" className='rounded-full w-16 h-16 object-cover' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-[#050709] mt-10 flex justify-between px-10 py-5 bottom-0 items-center'>
                <p className='flex items-center justify-center'>
                    <p className='text-black bg-white rounded-full h-4 w-4 flex items-center justify-center'>c</p>
                    <span className='text-textPrimary text-base ml-2'>All right reserved</span></p>
                <p className='text-white text base'>Designed By, <span className='text-base text-textPrimary underline'>HTML Codex</span></p>
            </div>
        </div>
    )
}

export default Footer
