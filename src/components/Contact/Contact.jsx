import { IoIosSend } from 'react-icons/io';
import contact from '../../assets/images/contact.jpg';

const Contact = () => {
    return (
        <div className="bg-base-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 md:py-24">
            <div>
                <h1 className="text-4xl font-bold">Contact me</h1>
                <p className="pt-3 pb-6 text-lg">Please fell out the form below to contact me!</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5">
                <div className="lg:w-1/2">
                    <img src={contact} alt="contact" className='rounded-3xl' />
                </div>
                <form className="w-full lg:w-1/2 lg:px-10">
                    <h2 className='text-xl font-bold mb-1'>Send Your Message</h2>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Your Name</span>
                        </div>
                        <input required type="text" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Your Email</span>
                        </div>
                        <input required type="email" placeholder="Email" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Your Message</span>
                        </div>
                        <textarea required className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                    </label>
                    <button type='submit' className="btn bg-[#41b8d6] text-white hover:bg-[#4B0082] w-full mt-5">
                        <IoIosSend className='text-lg' />
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
