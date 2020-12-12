import React from 'react';
import Modal from 'react-modal';

const IntroductoryCallModal = ({ isIntroductoryCallModalOpen, closeIntroductoryCallModal }) => {
	return (
		<Modal
			isOpen={isIntroductoryCallModalOpen}
			contentLabel='Simple Contact Form'
			onRequestClose={closeIntroductoryCallModal}
			ariaHideApp={false}
			className='introductory-call-modal'
			closeTimeoutMS={500}
		>
			<h2>Hello from IntroductoryCallModal component!</h2>
		</Modal>
	);
};

export default IntroductoryCallModal;
