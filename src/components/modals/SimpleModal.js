import React from 'react';
import Modal from 'react-modal';

const SimpleModal = ({ isSimpleModalOpen, closeSimpleModal }) => {
	return (
		<Modal
			isOpen={isSimpleModalOpen}
			contentLabel='Simple Contact Form'
			onRequestClose={closeSimpleModal}
			ariaHideApp={false}
			className='sign-up-modal'
			closeTimeoutMS={500}
		>
			<h2>Hello from SimpleModal component!</h2>
		</Modal>
	);
};

export default SimpleModal;
