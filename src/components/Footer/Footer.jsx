import logo from '../../assets/images/banner.png';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="bg-base-300 ">
                <footer className="grid grid-cols-1 md:grid-cols-4 justify-between text-base-content p-10  max-w-screen-2xl container mx-auto px-4 md:px-20 space-y-6 md:space-y-0">

                    <nav className='space-y-3 text-center md:text-left'>
                        <a className="flex justify-center items-center md:justify-start gap-2 font-bold">
                            <img src={logo} alt="Logo" className='w-14 rounded-full' />
                            <div className='text-left'>
                                <h1 className='text-[#4B0082]'>Web</h1>
                                <h1 className='text-[#41b8d6]'>Developer</h1>
                            </div>
                        </a>
                        <p className='font-bold'>Shuvankor Hazra Portfolio</p>
                    </nav>
                    <nav className="flex flex-col text-center md:text-left">
                        <h6 className="font-bold opacity-50 uppercase mb-2">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="flex flex-col text-center md:text-left">
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
                        </div>
                    </nav>
                </footer>
            </div>
        </>
    );
}

export default Footer;
