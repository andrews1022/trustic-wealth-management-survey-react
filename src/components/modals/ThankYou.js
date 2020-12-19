import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ThankYou = ({ closeModalFn }) => {
	return (
		<div className='ty'>
			<FontAwesomeIcon className='ty__icon' icon={faTimesCircle} onClick={closeModalFn} />
			<h2 className='ty__heading'>Thank you for submitting your email!</h2>
		</div>
	);
};

export default ThankYou;
