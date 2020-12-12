import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ openSimpleModal, openIntroductoryCallModal }) => {
	return (
		<AnimatePresence>
			<motion.nav
				key='Nav'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className='nav'
			>
				<ul className='nav__list'>
					<li className='nav__item' onClick={openIntroductoryCallModal}>
						Book an introductory call
					</li>
					<li className='nav__item' onClick={openSimpleModal}>
						Signup for future retirement insights
					</li>
				</ul>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Nav;
