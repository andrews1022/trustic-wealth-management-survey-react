import React, { useContext } from 'react';

// context
import { FormContext } from './../../App';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ThankYou = ({ closeModalType }) => {
	const formContext = useContext(FormContext);

	return (
		<div className='ty'>
			<FontAwesomeIcon
				className='ty__icon'
				icon={faTimesCircle}
				onClick={() => formContext.formDispatch({ type: `CLOSE_${closeModalType}_MODAL` })}
			/>
			<h2 className='ty__heading'>Thank you for submitting your email!</h2>
		</div>
	);
};

export default ThankYou;
