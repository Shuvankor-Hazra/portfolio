import img1 from '../../assets/images/project1.png';
import img2 from '../../assets/images/project2.png';
import img3 from '../../assets/images/project3.png';
import img4 from '../../assets/images/project4.png';
import img5 from '../../assets/images/project5.jpg';
import img6 from '../../assets/images/project6.jpg';
import img7 from '../../assets/images/project7.jpg';
import img8 from '../../assets/images/project8.jpg';

const Projects = () => {
    return (
        <>
            <div name="Projects" className="bg-base-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 md:py-24">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="pt-3 pb-6 text-lg">My recent project showcases my skills in creating a dynamic, responsive website.</p>

                <div className="carousel w-full h-[450px]">
                    <div id="slide1" className="carousel-item relative w-full group">
                        <img
                            src={img1}
                            className="w-full rounded-3xl" />
                        <div className="absolute top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 bg-[#41b8d6] p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl lg:text-xl text-white">
                                Wedding Website
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://shaadidotcom-af40a.web.app"
                                    target="_blank"
                                >Live Preview</a>
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://github.com/Shuvankor-Hazra/assignment-12-matrimony-client"
                                    target="_blank"
                                >Github Link</a>
                            </div>
                        </div>
                        <div className="absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide8" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full group">
                        <img
                            src={img2}
                            className="w-full rounded-3xl" />
                        <div className="absolute top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 bg-[#41b8d6] p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl lg:text-xl text-white">
                                Art & Crafts
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://assignment-10-art-craft-56221.web.app"
                                    target="_blank"
                                >Live Preview</a>
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://github.com/Shuvankor-Hazra/assignment-10-art-craft-client"
                                    target="_blank"
                                >Github Link</a>
                            </div>
                        </div>
                        <div className="absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full group">
                        <img
                            src={img3}
                            className="w-full rounded-3xl" />
                        <div className="absolute top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 bg-[#41b8d6] p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl lg:text-xl text-white">
                                Library management
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://user-email-passwoed-auth.web.app"
                                    target="_blank"
                                >Live Preview</a>
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://github.com/Shuvankor-Hazra/assignment-11-library-management-client"
                                    target="_blank"
                                >Github Link</a>
                            </div>
                        </div>
                        <div className="absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full group">
                        <img
                            src={img4}
                            className="w-full rounded-3xl" />
                        <div className="absolute top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 bg-[#41b8d6] p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl lg:text-xl text-white">
                                Consulting Business
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://bd-ash.netlify.app"
                                    target="_blank"
                                >Live Preview</a>
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://github.com/Shuvankor-Hazra/project-react"
                                    target="_blank"
                                >Github Link</a>
                            </div>
                        </div>
                        <div className="absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide5" className="carousel-item relative w-full group">
                        <img
                            src={img5}
                            className="w-full rounded-3xl" />
                        <div className="absolute top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 bg-[#41b8d6] p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl lg:text-xl text-white">
                                Interior Design
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://shuvankor-hazra.github.io/Decbase"
                                    target="_blank"
                                >Live Preview</a>
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://github.com/Shuvankor-Hazra/Decbase"
                                    target="_blank"
                                >Github Link</a>
                            </div>
                        </div>
                        <div className="absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide6" className="carousel-item relative w-full group">
                        <img
                            src={img6}
                            className="w-full rounded-3xl" />
                        <div className="absolute top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 bg-[#41b8d6] p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl lg:text-xl text-white">
                                Builder Website
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://shuvankor-hazra.github.io/Builders-bd"
                                    target="_blank"
                                >Live Preview</a>
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://github.com/Shuvankor-Hazra/Builders-bd"
                                    target="_blank"
                                >Github Link</a>
                            </div>
                        </div>
                        <div className="absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide7" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide7" className="carousel-item relative w-full group">
                        <img
                            src={img7}
                            className="w-full rounded-3xl" />
                        <div className="absolute top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 bg-[#41b8d6] p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl lg:text-xl text-white">
                                Project Management
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://shuvankor-hazra.github.io/whitepace"
                                    target="_blank"
                                >Live Preview</a>
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://github.com/Shuvankor-Hazra/whitepace"
                                    target="_blank"
                                >Github Link</a>
                            </div>
                        </div>
                        <div className="absolute flex gap-5 bottom-5 right-5">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide8" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide8" className="carousel-item relative w-full group">
                        <img
                            src={img8}
                            className="w-full rounded-3xl" />
                        <div className="absolute top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 bg-[#41b8d6] p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl lg:text-xl text-white">
                                Personal Portfolio
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://shuvankor-hazra.github.io/Personal"
                                    target="_blank"
                                >Live Preview</a>
                                <a className="btn btn-sm cursor-pointer border-2"
                                    href="https://github.com/Shuvankor-Hazra/Personal"
                                    target="_blank"
                                >Github Link</a>
                            </div>
                        </div>
                        <div className="absolute flex gap-3 bottom-5 right-5">
                            <a href="#slide7" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Projects;
