import logo from '../../assets/images/banner.png';
import { MdOutlineMenu } from "react-icons/md";


const Navbar = () => {


    return (
        <>
            <div className="bg-base-200 bg-opacity-50 fixed top-0 left-0 right-0 z-50">
                <div className="navbar max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <MdOutlineMenu className='h-8 w-8' />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-[#4B0082] rounded-box z-[1] w-48 p-6 shadow space-y-4 text-white">
                                {
                                    navItems.map(({ id, text }) => (
                                        <li className='hover:scale-105 duration-150 cursor-pointer' key={id}>{text}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost btm-nav-md hover:bg-transparent text-lg">
                            <img src={logo} alt="Logo" className='w-12 rounded-full' />
                            <div className='text-left'>
                                <h1 className=' flex items-center justify-center text-[#4ddbff]'>
                                    --WEB--
                                </h1>
                                <h1 className='text-[#4B0082]'>Developer</h1>
                            </div>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-base font-semibold space-x-6">
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-110 duration-150 cursor-pointer' key={id}>{text}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-[#41b8d6] text-white hover:bg-[#4B0082]">Resume</a>
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
        text: "Contacts"
    },
]

export default Navbar;
