import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<footer className='footer'>
			<h2>Hello from the Footer component</h2>
			<FontAwesomeIcon icon={faDownload} />
			<FontAwesomeIcon icon={faPhoneVolume} />
		</footer>
	);
};

export default Footer;
