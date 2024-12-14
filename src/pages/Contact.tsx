import { FaLandmark } from "react-icons/fa6"
import TextField from "../components/Text"
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto">
        <div className='bg-[#fffcf8] h-60 flex items-center justify-center'>
          <div className='block'>
            <p className='font-playball text-6xl'>Contacts</p>
            <p className='my-10 text-textPrimary'>Home / Pages /  <span className='text-black'>Contacts </span></p>
          </div>
        </div>
        <div className="bg-[#fffcf8] py-10 mt-10 p-10">
          <div className="flex ">
            <div className="block">
              <p className="uppercase inline-block border-[1px] border-[#d4a762] rounded-full bg-[#fffcf8] text-[#050709] font-bold py-2 px-10 text-sm">
                Get in touch</p>
              <p className="font-playball lg:mt-4 text-center text-3xl lg:text-5xl py-1 max-w-[800px]">
                Contact Us For Any Queries!
              </p>
            </div>
          </div>
          <div className="py-3 lg:flex gap-9">
            <div className="lg:w-1/2 block">
              <p className="text-[#9A9A9A]">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now.
              </p>
              <div className="w-full py-5">
                <TextField
                  placeholder="Enter Your Name"
                  className="lg:w-[600px] w-full p-4 font-extrabold"
                />
                <TextField
                  placeholder="Enter Your Email"
                  className="lg:w-[600px] w-full p-4 font-extrabold"
                />
                <TextField
                  placeholder="Your Message"
                  className="lg:w-[600px] w-full py-8 pl-4 text-[#9a9a9a] font-extrabold"
                />

              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="mb-3 flex w-full p-3 border border-textPrimary rounded-md">
                <div className="pr-5">
                <FaMapMarkerAlt className="mt-2 text-textPrimary font-extrabold" size={35} />
                </div>
                <div>
                <h4 className="text-2xl">Address</h4>
                <p className="text-[#9a9a9a]">123 Street, New York, USA</p>
                </div>
                
              </div>
              <div className=" my-3 flex w-full p-3 border border-textPrimary rounded-md">
                <div className="pr-5">
                <IoMail className=" text-textPrimary font-extrabold" size={35} />
                </div>
                <div>
                <h4 className="text-2xl">Mail Us
                </h4>
                <p className="text-[#9a9a9a]">info@example.com</p>
                <p className="text-[#9a9a9a]">support@example.com</p>

                </div>
                
              </div> <div className=" my-3 flex w-full p-3 border border-textPrimary rounded-md">
                <div className="pr-5">
                <FaPhone className="mt-2 text-textPrimary font-extrabold" size={30} />
                </div>
                <div>
                <h4 className="text-2xl">Telephone</h4>
                <p className="text-[#9a9a9a]">(+012) 3456 7890 123</p>
                <p className="text-[#9a9a9a]">(+704) 5555 0127 296</p>

                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Contact
