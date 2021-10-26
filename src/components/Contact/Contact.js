import './Contact.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import { useForm } from 'react-hook-form';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
        opacity: 0,
        transition: { ease: 'easeInOut' }
    }
}

const emailRedex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();


    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >

            {/***** Header *****/}
            <Navbar />

            {/***** Offscreen modal *****/}
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <div className='contact-container' >
                <div className='contact-modal'>
                    <div className='contact-modal-content'>
                        <h1>CONTACT US</h1>
                        <p>Got any questions or concerns? We're happy to help! </p>

                        {/***** Form shows offscreen modal & clears inputs *****/}
                        <form onSubmit={handleSubmit(() => { !errors.name && !errors.message && !errors.email && setShowModal(true) })}>
                            {/***** Name input *****/}
                            <input className='form-input' type="text" placeholder='Name' {...register('name', { required: 'Please type your name' })} />
                            {errors.name && <span className='form-input-error'>{errors.name.message}</span>}

                            {/***** Email input *****/}
                            <input className='form-input' type="text" placeholder='Email' {...register('email', { required: 'Please type your email', pattern: emailRedex })} />
                            {errors.email?.type === 'pattern' && <span className='form-input-error'>Not a valid email</span>}
                            {errors.email?.type === 'required' && <span className='form-input-error'>{errors.email.message}</span>}

                            {/***** Message input *****/}
                            <input className='form-input' type="text" placeholder='Your message' {...register('message', { required: 'Please type your message' })} />
                            {errors.message && <span className='form-input-error'>{errors.message.message}</span>}
                            {/***** Contact button *****/}
                            <button>SEND A MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
