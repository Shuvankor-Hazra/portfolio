import { FaDownload } from 'react-icons/fa';
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-scroll';
import logo from '../../assets/images/banner.png';


const Navbar = () => {


    return (
        <>
            <div className="bg-base-200 bg-opacity-80 fixed top-0 left-0 right-0 z-50 py-3">
                <div className="navbar max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <MdOutlineMenu className='h-8 w-8' />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-[#41b8d6] rounded-box z-[1] w-52 p-6 shadow space-y-4 text-white">
                                {
                                    navItems.map(({ id, text }) => (
                                        <li className='hover:scale-105 duration-150 cursor-pointer' key={id}>
                                            <Link
                                                to={text}
                                                smooth={true}
                                                duration={500}
                                                offset={-70}
                                                activeClass='active'
                                            >{text}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <button className="flex items-center gap-2 hover:bg-transparent md:text-lg">
                            <div className='h-12 w-12'>
                                <img src={logo} alt="Logo" className='w-full rounded-xl' />
                            </div>
                            <div className='text-left font-bold'>
                                <h1 className=' flex items-center text-[#4B0082]'>
                                    Web__
                                </h1>
                                <h1 className='text-[#4B0082]'>Developer</h1>
                            </div>
                        </button>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-lg font-bold space-x-3">
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-110 duration-150 cursor-pointer' key={id}>
                                        <Link
                                            to={text}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            activeClass='active'
                                        >{text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a href='/Resume.pdf' download className="btn bg-[#41b8d6] text-white hover:bg-[#4B0082]">
                            <FaDownload />
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

const navItems = [
    {
        id: 1,
        text: "Home"
    },
    {
        id: 2,
        text: "About"
    },
    {
        id: 3,
        text: "Projects"
    },
    {
        id: 4,
        text: "Experience"
    },
    {
        id: 5,
        text: "Contact"
    },
]

export default Navbar;
