// import { IoIosSend } from 'react-icons/io';
// import contact from '../../assets/images/contact.jpg';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const Contact = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm()
//     const onSubmit = async (data) => {
//         const userInfo = {
//             name: data.name,
//             email: data.email,
//             message: data.message,
//         }
//         try {
//             await axios.post('https://getform.io/f/zazkkkxb', userInfo)
//             Swal.fire({
//                 title: "Your message has been send",
//                 showClass: {
//                     popup: `
//                     animate__animated
//                     animate__fadeInUp
//                     animate__faster
//                     `
//                 },
//                 hideClass: {
//                     popup: `
//                     animate__animated
//                     animate__fadeOutDown
//                     animate__faster
//                     `
//                 }
//             });
//         } catch (error) {
//             Swal.fire({
//                 title: "Oops...",
//                 text: "Something went wrong!",
//             });
//         }
//     }
//     return (
//         <div name="Contact" className="bg-base-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 md:py-24">
//             <div>
//                 <h1 className="text-4xl font-bold">Contact me</h1>
//                 <p className="pt-3 pb-6 text-lg">Please fell out the form below to contact me!</p>
//             </div>
//             <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-5">
//                 <div className="lg:w-1/2">
//                     <img src={contact} alt="contact" className='rounded-3xl w-full h-[400px]' />
//                 </div>
//                 <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2">
//                     <label className="form-control">
//                         <h2 className='text-xl font-bold mb-1'>Send Your Message</h2>
//                         <div className="label">
//                             <span className="label-text font-bold">Your Name</span>
//                         </div>
//                         <input name='name' {...register("name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered w-full" />
//                         {errors.name && <span className='text-error text-xs'>This field is required</span>}
//                     </label>
//                     <label className="form-control">
//                         <div className="label">
//                             <span className="label-text font-bold">Your Email</span>
//                         </div>
//                         <input name='email' {...register("email", { required: true })} type="email" placeholder="Enter your email" className="input input-bordered w-full" />
//                         {errors.email && <span className='text-error text-xs'>This field is required</span>}
//                     </label>
//                     <label className="form-control">
//                         <div className="label">
//                             <span className="label-text font-bold">Your Message</span>
//                         </div>
//                         <textarea name='message' {...register("message", { required: true })} className="textarea textarea-bordered h-24 text-base" placeholder="Enter your query"></textarea>
//                         {errors.message && <span className='text-error text-xs'>This field is required</span>}
//                     </label>
//                     <button type='submit' className="btn bg-[#41b8d6] text-white hover:bg-[#4B0082] w-full mt-5">
//                         <IoIosSend className='text-lg' />
//                         Send
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }
// export default Contact;


import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { IoIosSend } from 'react-icons/io';
import Swal from 'sweetalert2';
import contact from '../../assets/images/contact.jpg';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_4evss5d', 'template_ukn2w4o', form.current, {
                publicKey: '3xd1VyeW9RbKVVGor',
            })
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        title: "Your message has been send",
                        showClass: {
                            popup: `
                                        animate__animated
                                        animate__fadeInUp
                                        animate__faster
                                        `
                        },
                        hideClass: {
                            popup: `
                                        animate__animated
                                        animate__fadeOutDown
                                        animate__faster
                                        `
                        }
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                },
            );
    };

    return (
        <div name="Contact" className="bg-base-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 md:py-24">
            <div>
                <h1 className="text-4xl font-bold">Contact me</h1>
                <p className="pt-3 pb-6 text-lg">Please fell out the form below to contact me!</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-5">
                <div className="lg:w-1/2">
                    <img src={contact} alt="contact" className='rounded-3xl w-full h-[400px]' />
                </div>
                <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2">
                    <label className="form-control">
                        <h2 className='text-xl font-bold mb-1'>Send Your Message</h2>
                        <div className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </div>
                        <input name='form_name' type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-bold">Your Email</span>
                        </div>
                        <input name='form_email' type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-bold">Your Message</span>
                        </div>
                        <textarea name='form_message' className="textarea textarea-bordered h-24 text-base" placeholder="Enter your query" required />
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
