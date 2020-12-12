import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Intro = ({ currentStep, onClickHandler, openSimpleModal }) => {
	if (currentStep === 0) {
		return (
			<AnimatePresence>
				<motion.div
					key='Intro'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2>Hello from Intro component!</h2>
					<button onClick={openSimpleModal}>Download Survey Results</button>
					<button onClick={onClickHandler}>Start Survey</button>
				</motion.div>
			</AnimatePresence>
		);
	} else {
		return null;
	}
};

export default Intro;
