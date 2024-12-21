import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="py-4 border-b-[1px]">
            <div className="flex flex-wrap justify-between items-center px-4 lg:px-8">
                {/* Logo */}
                <div className="font-playball text-3xl font-bold">
                    <h1 className="text-[#d4a762]">Cater<span className="text-black">Serv</span></h1>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden bg-[#d4a762] rounded-full h-10 w-10 flex justify-center items-center"
                >
                    <LuSearch className="text-black text-lg" />
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex flex-grow justify-center">
                    <ul className="flex flex-wrap space-x-4 text-sm lg:text-lg text-[#0000008C] font-extrabold font-sans px-[10px] py-3 transition-all duration-500">
                        <li className="font-bold hover:text-[#d4a762]">
                            <NavLink to="/catering" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-textPrimary" : ""
                            }>Home</NavLink>
                        </li>
                        <li className="font-bold hover:text-[#d4a762]">
                            <NavLink to="catering/about" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-textPrimary" : ""
                            }>About</NavLink>
                        </li>
                        <li className="font-bold hover:text-[#d4a762]">
                            <NavLink to="/catering/services" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-textPrimary" : ""
                            }>Services</NavLink>
                        </li>
                        <li className="font-bold hover:text-[#d4a762]">
                            <NavLink to="/catering/events" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-textPrimary" : ""
                            }>Events</NavLink>
                        </li>
                        <li className="font-bold hover:text-[#d4a762]">
                            <NavLink to="catering/menu" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-textPrimary" : ""
                            }>Menu</NavLink>
                        </li>
                        <li className="font-bold hover:text-[#d4a762]">
                            <NavLink to="catering/contact" className={({isActive,isPending})=> isPending ? "" : isActive ? "text-textPrimary" : ""}>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Desktop Search and Button */}
                <div className="hidden lg:flex space-x-5 items-center">
                    <LuSearch className="bg-[#d4a762] rounded-full h-10 w-10 p-2 text-base text-black font-extrabold" />
                    <button className="rounded-full bg-[#d4a762] font-bold text-black px-4 font-sans text-base py-2">
                        Book Now
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div
                className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-white absolute top-20 left-0 w-full py-4`}
            >
                <ul className="flex flex-col items-center space-y-4 text-lg text-[#0000008C] font-extrabold font-sans">
                    <li className="font-bold hover:text-[#d4a762]">
                        <NavLink to="/catering">Home</NavLink>
                    </li>
                    <li className="font-bold hover:text-[#d4a762]">
                        <NavLink to="catering/about">About</NavLink>
                    </li>
                    <li className="font-bold hover:text-[#d4a762]">
                        <NavLink to="catering/services">Services</NavLink>
                    </li>
                    <li className="font-bold hover:text-[#d4a762]">
                        <NavLink to="catering/events">Events</NavLink>
                    </li>
                    <li className="font-bold hover:text-[#d4a762]">
                        <NavLink to="catering/menu">Menu</NavLink>
                    </li>
                    <li className="font-bold hover:text-[#d4a762]">
                        <NavLink to="catering/pages">Pages</NavLink>
                    </li>
                    <li className="font-bold hover:text-[#d4a762]">
                        <NavLink to="catering/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
