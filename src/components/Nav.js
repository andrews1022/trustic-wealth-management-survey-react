import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOut } from './../animations/Animations';

const Nav = ({ openSimpleModal, openIntroductoryCallModal }) => {
	return (
		<AnimatePresence>
			<motion.nav
				variants={fadeInOut}
				initial='hidden'
				animate='show'
				exit='exit'
				key='nav'
				className='nav'
			>
				<ul className='nav__list'>
					<li className='nav__item' onClick={openIntroductoryCallModal}>
						Book an introductory call
					</li>
					<li className='nav__item' onClick={openSimpleModal} data-simple-modal-opener='nav'>
						Sign up for future retirement insights
					</li>
				</ul>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Nav;
