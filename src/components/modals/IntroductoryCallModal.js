import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Logo from './../../images/trustic-logo.png';

const IntroductoryCallModal = ({ isIntroductoryCallModalOpen, closeIntroductoryCallModal }) => {
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());

	// update date when modal is opened
	useEffect(() => {
		// get current date
		const currentDate = new Date();

		// set date and time picker values to current date if modal is open
		if (isIntroductoryCallModalOpen) {
			setDate(currentDate);
			setTime(currentDate);
		}

		// cleanup
		return () => !isIntroductoryCallModalOpen;
	}, [isIntroductoryCallModalOpen]);

	return (
		<Modal
			isOpen={isIntroductoryCallModalOpen}
			contentLabel='Simple Contact Form'
			onRequestClose={closeIntroductoryCallModal}
			ariaHideApp={false}
			closeTimeoutMS={500}
			className='icm' // introductory call modal shorthand: icm
		>
			<img className='icm__logo' src={Logo} alt='Trustic Logo' />
			<form className='icm__form' action=''>
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
					<DatePicker selected={date} onChange={(date) => setDate(date)} className='icm__input' />
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
				<p className='icm__legal'>
					By clicking below you agree to these <span>Terms and Conditions</span> and{' '}
					<span>Privacy Policies</span>.
				</p>
				<input className='icm__submit' type='submit' value='Book Appointment' />
			</form>
		</Modal>
	);
};

export default IntroductoryCallModal;
