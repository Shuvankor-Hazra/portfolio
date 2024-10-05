import { BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact } from 'react-icons/bi';
import banner from '../../assets/images/banner.png';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";


const Banner = () => {
    return (
        <>
            <div name="Home" className="bg-base-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 md:py-24">
                <div className="flex items-center flex-col-reverse lg:flex-row pt-20 pb-6">
                    <div className="lg:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
                        <p className='md:font-medium text-[#41b8d6]'>WELCOME TO MY FEED !</p>
                        <h1 className='text-3xl md:text-5xl font-bold'>I{"'"}m Shuvankor Hazra</h1>
                        <div className='text-lg md:text-2xl font-bold flex items-center justify-center md:justify-start gap-2 text-center md:text-left'>
                            <h3>A <span className='text-[#41b8d6]'>Creative</span> Frontend</h3>
                            <ReactTyped
                                className='text-[#41b8d6] text-lg md:text-xl'
                                strings={["Web Developer !", "Coder !", "Programer !"]}
                                typeSpeed={30}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <p className='text-gray-500 pb-5'>I{"'"}m a creative designer based in Bangladesh; I{"'"}m very passionate and dedicated to my work.</p>
                        <div className='flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0'>
                            <div className='space-y-3'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex gap-5 '>
                                    <li>
                                        <a href="https://www.twitter.com" target='_blank'><FaTwitter className='text-2xl cursor-pointer' /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com" target='_blank'><FaFacebook className='text-2xl cursor-pointer' /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.github.com" target='_blank'><FaGithub
                                            className='text-2xl cursor-pointer' /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkdin.com" target='_blank'><FaLinkedin className='text-2xl cursor-pointer' /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <ul className='flex gap-5 '>
                                    <li><a href=""><BiLogoMongodb className='text-3xl hover:scale-110 border-2 border-[#4B0082] rounded' /></a></li>
                                    <li><a href=""><BiLogoReact className='text-3xl hover:scale-110 border-2 border-[#4B0082] rounded' /></a></li>
                                    <li><a href=""><BiLogoJavascript className='text-3xl hover:scale-110 border-2 border-[#4B0082] rounded' /></a></li>
                                    <li><a href=""><BiLogoNodejs className='text-3xl hover:scale-110 border-2 border-[#4B0082] rounded' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className='h-[350px] w-[350px] rounded-full'>
                            <img src={banner} alt="banner" className='w-full rounded-3xl' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
