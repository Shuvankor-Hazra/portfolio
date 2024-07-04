

const About = () => {
    return (
        <>
            <div name="About" className="bg-base-200 max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 md:py-24">
                <h1 className="text-4xl font-bold">About me</h1>
                <p className="pt-3 pb-6 text-lg">Hello, i{"'"}am Shuvankor, a passionate Web developer with a keen eye  for MERN Stack</p>
                <div className="space-y-3 border border-[#4B0082] p-8 rounded-2xl mt-5">
                    <div>
                        <h2 className="text-lg font-bold text-[#4B0082]">Education & Training</h2>
                        <p>[ HSC, 2010, Dakshin Sreepur School & Collage ] [ SSC, 2008, Fatepur Secondary School ] [ Frontend web development, 2024, Programming Hero ] </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#4B0082]">Skills & Expertise</h2>
                        <p>[ HTML, CSS, Bootstrap, Firebase, Git, GitHub - 2 years ] [ JavaScript, React, Tailwind, MongoDB - 1.5 years ] [ NodeJs, Next.Js - 1 year ] </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#4B0082]">Professional Experience</h2>
                        <p>I have no professional experience yet, but I am eager to learn and grow. I am ready to start my career journey.</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#4B0082]">Hobbies and Habits</h2>
                        <p>I love singing, swimming, playing, traveling and reading books. I enjoy being creative, staying active, and learning new things. These hobbies make me happy and keep me engaged.</p>
                    </div>
                </div>
            </div>
            <hr /><hr />
        </>
    );
}

export default About;
