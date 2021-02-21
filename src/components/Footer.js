import React, { useContext } from 'react';

// context
import { FormContext } from './../App';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

// logo
import TrusticLogo from './../images/trustic-logo.png';

const Footer = () => {
	// context
	const formContext = useContext(FormContext);

	return (
		<footer className='footer'>
			<div className='footer__row'>
				<div className='footer__box'>
					<img className='footer__logo' src={TrusticLogo} alt='rgf logo in white text'></img>
				</div>
				<div className='footer__box'>
					<button
						className='footer__button button button--hollow button--small'
						onClick={() =>
							formContext.formDispatch({
								type: 'OPEN_SIMPLE_MODAL',
								text: 'Download the Survey Results'
							})
						}
					>
						<FontAwesomeIcon className='footer__icon' icon={faDownload} />
						Download Complete Survey
					</button>
					<button
						className='footer__button button button--solid button--small'
						onClick={() => formContext.formDispatch({ type: 'OPEN_INTRODUCTORY_CALL_MODAL' })}
					>
						<FontAwesomeIcon className='footer__icon' icon={faPhoneVolume} />
						Book an Introductory Call
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
