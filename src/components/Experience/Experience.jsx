import { BiLogoBootstrap, BiLogoCss3, BiLogoFigma, BiLogoFirebase, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';


const Experience = () => {
    return (
        <>
            <div className="bg-base-200 max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 md:py-24">
                <h1 className="text-4xl font-bold">Experience</h1>
                <p className="pt-3 pb-6 text-lg">I{"'"}ve more then 2 years of experience in below this technology!</p>
                <div className='text-9xl grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 '>
                    {
                        items.map(({ id, logo, name }) => (
                            <div key={id} className='shadow-lg border-2 border-[#41b8d6] p-10 rounded-3xl flex flex-col justify-center items-center hover:scale-105 duration-150 cursor-pointer'>
                                {logo}
                                <span className='text-2xl font-bold pt-3'>{name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
        </>
    );
}

const items = [
    {
        id: 1,
        logo: <BiLogoJavascript />,
        name: "Javascript"
    },
    {
        id: 2,
        logo: <BiLogoMongodb />,
        name: "Mongodb"
    },
    {
        id: 3,
        logo: <BiLogoNodejs />,
        name: "Nodejs"
    },
    {
        id: 4,
        logo: <BiLogoReact />,
        name: "React"
    },
    {
        id: 5,
        logo: <BiLogoHtml5 />,
        name: "Html5"
    },
    {
        id: 6,
        logo: <BiLogoCss3 />,
        name: "Css3"
    },
    {
        id: 7,
        logo: <BiLogoBootstrap />,
        name: "Bootstrap"
    },
    {
        id: 8,
        logo: <BiLogoTailwindCss />,
        name: "TailwindCss"
    },
    {
        id: 9,
        logo: <BiLogoFigma />,
        name: "Figma"
    },
    {
        id: 10,
        logo: <BiLogoFirebase />,
        name: "Firebase"
    },
]

export default Experience;
