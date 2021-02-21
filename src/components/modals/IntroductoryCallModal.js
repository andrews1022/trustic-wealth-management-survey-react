import React, { useContext, useEffect, useState } from 'react';

// context
import { FormContext } from './../../App';

// animations
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, modalContentSwitch } from './../../animations/Animations';

// modal
import Modal from 'react-modal';

// react inputs
import TimePicker from 'react-time-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// components
import ThankYou from './ThankYou';

// logo
import Logo from './../../images/trustic-logo.png';

const IntroductoryCallModal = () => {
	// context
	const formContext = useContext(FormContext);

	// state (needed for react date & time pickers)
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());

	// switch content inside modal based on whether form was submitted or not
	const formSubmitHandler = (e) => {
		e.preventDefault();
		formContext.formDispatch({ type: 'FORM_IS_SUBMITTED' });
	};

	// update date when modal is opened
	useEffect(() => {
		// get current date
		const currentDate = new Date();

		// set date and time picker values to current date if modal is open
		if (formContext.formState.isIntroductoryCallModalOpen) {
			setDate(currentDate);
			setTime(currentDate);
		}

		// cleanup
		return () => !formContext.formState.isIntroductoryCallModalOpen;
	}, [formContext.formState.isIntroductoryCallModalOpen]);

	return (
		<Modal
			isOpen={formContext.formState.isIntroductoryCallModalOpen}
			contentLabel='Simple Contact Form'
			onRequestClose={() => formContext.formDispatch({ type: 'CLOSE_INTRODUCTORY_CALL_MODAL' })}
			onAfterClose={() => formContext.formDispatch({ type: 'FORM_IS_NOT_SUBMITTED' })}
			ariaHideApp={false}
			closeTimeoutMS={500}
			className='icm'
		>
			{!formContext.formState.formIsSubmitted ? (
				<div className='icm__inner'>
					<img className='icm__logo' src={Logo} alt='Trustic Logo' />
					<div className='icm__divider'></div>
					<form className='icm__form' onSubmit={formSubmitHandler}>
						<div className='icm__form-group'>
							<label className='icm__label' htmlFor='advisor'>
								Meeting with
							</label>
							<select className='icm__input' name='advisor' id='advisor'>
								<option value='Choose Advisor'>Choose Advisor</option>
								<option value='Daniel'>Daniel</option>
								<option value='Gabriella'>Gabriella</option>
								<option value='Randall'>Randall</option>
								<option value='Lillian'>Lillian</option>
								<option value='Beatrice'>Beatrice</option>
							</select>
						</div>
						<div className='icm__form-group'>
							<label className='icm__label'>On</label>
							<DatePicker
								selected={date}
								onChange={(date) => setDate(date)}
								className='icm__input'
							/>
						</div>
						<div className='icm__form-group'>
							<label className='icm__label'>At</label>
							<TimePicker onChange={setTime} value={time} className='icm__input' />
						</div>
						<div className='icm__form-group'>
							<label className='icm__label' htmlFor='name'>
								Name
							</label>
							<input
								className='icm__input'
								type='text'
								name='name'
								id='name'
								placeholder='Enter your full name'
							/>
						</div>
						<div className='icm__form-group'>
							<label className='icm__label' htmlFor='email'>
								Email
							</label>
							<input
								className='icm__input'
								type='email'
								name='email'
								id='email'
								placeholder='Enter your email address'
							/>
						</div>
						<div className='icm__form-group'>
							<label className='icm__label' htmlFor='message'>
								Message
							</label>
							<textarea
								name='message'
								id='message'
								cols='30'
								rows='5'
								placeholder='Anything we should know?'
								className='icm__message'
							></textarea>
						</div>
						<input
							className='button button--hollow button--large button--modal'
							type='submit'
							value='Book Appointment'
						/>
						<p className='icm__legal'>
							By clicking below you agree to these{' '}
							<span className='icm__legal-highlight'>Terms and Conditions</span> and{' '}
							<span className='icm__legal-highlight'>Privacy Policies</span>.
						</p>
					</form>
				</div>
			) : (
				<div className='icm__ty'>
					<ThankYou modalType='INTRODUCTORY_CALL' />
				</div>
			)}
		</Modal>
	);
};

export default IntroductoryCallModal;
