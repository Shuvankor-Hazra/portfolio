import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../assets/images/banner.png';
import { IoIosMail, IoIosPerson, IoIosPhonePortrait } from "react-icons/io";


const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-4 justify-between p-16  max-w-screen-2xl container mx-auto px-4 md:px-20 space-y-6 md:space-y-0">

                    <nav className='text-center md:text-left'>
                        <a className="flex justify-center items-center md:justify-start gap-2 font-bold">
                            <img src={logo} alt="Logo" className='w-14 rounded-full' />
                            <div className='text-left'>
                                <h1 className='flex items-center justify-center text-[#4ddbff]'>
                                    --WEB--
                                </h1>
                                <h1 className='text-[#41b8d6]'>Developer</h1>
                            </div>
                        </a>
                        <div className="text-lg font-bold space-y-2 mt-5">
                            <p className='flex items-center gap-2 '>
                                <IoIosPerson className="text-[#41b8d6] text-xl" />
                                <span>Shuvankor Hazra</span>
                            </p>
                            <p className='flex items-center gap-2 '>
                                <IoIosMail className="text-[#41b8d6] text-xl" />
                                <span>shuvo.s.ovuhs@gmail.com</span>
                            </p>
                            <p className='flex items-center gap-2 '>
                                <IoIosPhonePortrait className="text-[#41b8d6] text-xl" />
                                <span>+88 01741-836653</span>
                            </p>
                        </div>
                    </nav>
                    <nav className="flex flex-col text-center md:text-left space-y-1">
                        <h6 className="font-bold opacity-50 uppercase mb-2">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="flex flex-col text-center md:text-left space-y-1">
                        <h6 className="font-bold opacity-50 uppercase mb-2">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className=' text-center md:text-left'>
                        <h6 className="font-bold opacity-50 uppercase mb-2">Social</h6>
                        <div className="flex justify-center md:justify-start gap-5 text-xl">
                            <a><FaFacebook /></a>
                            <a><FaYoutube /></a>
                            <a><FaTwitter /></a>
                            <a><FaGithub /></a>
                            <a><FaLinkedin /></a>
                        </div>
                    </nav>
                </div>
                <div className='py-3 border-t border-gray-600'>
                    <div className="p-4 text-center">
                        <p>Copyright © ${new Date().getFullYear()} - All right reserved by Shuvankor Hazra</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
