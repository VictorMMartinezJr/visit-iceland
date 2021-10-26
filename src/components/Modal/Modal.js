import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Modal.css'

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const modalVariants = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: { delay: .2 }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className='backdrop'
                    variants={backdropVariants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div className='thanks-modal'
                        variants={modalVariants}
                    >
                        <p>Talk to you soon!</p>
                        <Link to='/'>
                            <button onClick={() => setShowModal(false)}>Home</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
