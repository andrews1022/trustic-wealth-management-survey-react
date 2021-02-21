import React, { useContext } from 'react';

// context
import { FormContext } from './../../App';

// animations
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, modalContentSwitch } from './../../animations/Animations';

// modal
import Modal from 'react-modal';
import ThankYou from './ThankYou';

// logo
import Logo from './../../images/trustic-logo.png';

const SimpleModal = () => {
	// context
	const formContext = useContext(FormContext);

	// switch content inside modal based on whether form was submitted or not
	const formSubmitHandler = (e) => {
		e.preventDefault();
		formContext.formDispatch({ type: 'FORM_IS_SUBMITTED' });
	};

	return (
		<Modal
			isOpen={formContext.formState.isSimpleModalOpen}
			contentLabel='Simple Contact Form'
			onRequestClose={() => formContext.formDispatch({ type: 'CLOSE_SIMPLE_MODAL' })}
			onAfterClose={() => formContext.formDispatch({ type: 'FORM_IS_NOT_SUBMITTED' })}
			ariaHideApp={false}
			closeTimeoutMS={500}
			className='sm'
		>
			{!formContext.formState.formIsSubmitted ? (
				<div className='sm__inner'>
					<img className='sm__logo' src={Logo} alt='Trustic Logo' />
					<h2 className='sm__heading'>{formContext.formState.simpleModalHeadingText}</h2>
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
							By submitting, I agree to receive email communications from Trustic Wealth Management
							and personnel. I understand I may withdraw my consent to receive communications at any
							time.
						</p>
					</form>
				</div>
			) : (
				<div className='sm__thank-you'>
					<ThankYou modalType='SIMPLE' />
				</div>
			)}
		</Modal>
	);
};

export default SimpleModal;
