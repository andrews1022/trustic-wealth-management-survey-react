import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import TrusticLogo from './../images/trustic-logo.png';

const Footer = ({ openSimpleModal, openIntroductoryCallModal }) => {
	return (
		<footer className='footer'>
			<div className='footer__row'>
				<div className='footer__box'>
					<img className='footer__logo' src={TrusticLogo} alt='rgf logo in white text'></img>
				</div>
				<div className='footer__box'>
					<button
						className='footer__button button button--hollow button--small'
						onClick={openSimpleModal}
						data-simple-modal-opener='footer'
					>
						<FontAwesomeIcon className='footer__icon' icon={faDownload} />
						Download Complete Survey
					</button>
					<button
						className='footer__button button button--solid button--small'
						onClick={openIntroductoryCallModal}
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
