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
			className='sm' // simple modal shorthand: sm
		>
			<img className='sm__logo' src={Logo} alt='Trustic Logo' />
			<h2 className='sm__heading'>{simpleModalHeadingText}</h2>
			<div className='sm__divider'></div>
			<form className='sm__form' action=''>
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
					<input className='sm__submit' type='submit' value='Submit' />
				</div>
				<p className='sm__legal'>
					By submitting, I agree to receive email communications from Trustic Wealth Management and
					personnel. I understand I may withdraw my consent to receive communications at any time.
				</p>
			</form>
		</Modal>
	);
};

export default SimpleModal;
