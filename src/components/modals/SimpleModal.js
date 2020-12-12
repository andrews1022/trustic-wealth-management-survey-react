import React from 'react';
import Modal from 'react-modal';
import Logo from './../../images/trustic-logo.png';

const SimpleModal = ({ isSimpleModalOpen, closeSimpleModal, simpleModalHeadingText }) => {
	return (
		<Modal
			isOpen={isSimpleModalOpen}
			contentLabel='Simple Contact Form'
			onRequestClose={closeSimpleModal}
			ariaHideApp={false}
			closeTimeoutMS={500}
			className='sum' // sign up modal shorthand: sum
		>
			<img className='sum__logo' src={Logo} alt='Trustic Logo' />
			<h2 className='sum__heading'>{simpleModalHeadingText}</h2>
			<form className='sum__form' action=''>
				<div className='sum__form-group'>
					<label className='sum__label' htmlFor='name'>
						Name
					</label>
					<input
						className='sum__input'
						type='text'
						name='name'
						id='name'
						placeholder='Enter your full name'
					/>
				</div>
				<div className='sum__form-group'>
					<label className='sum__label' htmlFor='email'>
						Email
					</label>
					<input
						className='sum__input'
						type='email'
						name='email'
						id='email'
						placeholder='Enter your email address'
					/>
				</div>
				<div className='sum__form-group'>
					<input type='submit' value='Submit' />
				</div>
				<p className='sum__legal'>
					By submitting, I agree to receive email communications from Trustic Wealth Management and
					personnel. I understand I may withdraw my consent to receive communications at any time.
				</p>
			</form>
		</Modal>
	);
};

export default SimpleModal;
