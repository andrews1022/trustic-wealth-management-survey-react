import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import ThankYou from './ThankYou';
import { fadeIn, modalContentSwitch } from './../../animations/Animations';
import Logo from './../../images/trustic-logo.png';

const SimpleModal = ({ isSimpleModalOpen, closeSimpleModal, simpleModalHeadingText }) => {
	// state
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);

	// switch content inside modal based on whether form was submitted or not
	const formSubmitHandler = (e) => {
		e.preventDefault();
		setFormIsSubmitted(true);
	};

	// reset state back to false when closing the modal so the user can fill out the form again
	const resetModalContent = () => setFormIsSubmitted(false);

	return (
		<Modal
			isOpen={isSimpleModalOpen} // boolean state for modal (is open or not)
			contentLabel='Simple Contact Form' // string indicating how the content should be red to screenreaders
			onRequestClose={closeSimpleModal} // fn that will be run if user clicks the bg overlay or hits esc key
			onAfterClose={resetModalContent} // fn that will be run after the modal has closed
			ariaHideApp={false} // boolean indicating if the appElement should be hidden
			closeTimeoutMS={500} // number indicating the milliseconds to wait before closing the modal (used for fade out)
			className='sm' // simple modal shorthand: sm
		>
			{formIsSubmitted === false ? (
				<AnimatePresence>
					<motion.div
						variants={modalContentSwitch}
						initial='hidden'
						animate='show'
						exit='exit'
						key='simple modal'
						className='sm__inner'
					>
						<img className='sm__logo' src={Logo} alt='Trustic Logo' />
						<h2 className='sm__heading'>{simpleModalHeadingText}</h2>
						<div className='sm__divider'></div>
						<form className='sm__form' onSubmit={formSubmitHandler}>
							<div className='sm__form-group'>
								<label className='sm__label' htmlFor='name'>
									Name
								</label>
								<input
									className='sm__input'
									type='text'
									name='name'
									id='name'
									placeholder='Enter your full name'
								/>
							</div>
							<div className='sm__form-group'>
								<label className='sm__label' htmlFor='email'>
									Email
								</label>
								<input
									className='sm__input'
									type='email'
									name='email'
									id='email'
									placeholder='Enter your email address'
								/>
							</div>
							<div className='sm__form-group'>
								<input
									className='button button--hollow button--large button--modal'
									type='submit'
									value='Submit'
								/>
							</div>
							<p className='sm__legal'>
								By submitting, I agree to receive email communications from Trustic Wealth
								Management and personnel. I understand I may withdraw my consent to receive
								communications at any time.
							</p>
						</form>
					</motion.div>
				</AnimatePresence>
			) : (
				<motion.div
					variants={fadeIn}
					initial='hidden'
					animate='show'
					key='sm thank you'
					className='sm__thank-you'
				>
					<ThankYou closeModalFn={closeSimpleModal} />
				</motion.div>
			)}
		</Modal>
	);
};

export default SimpleModal;
