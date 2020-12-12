import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Question1 = ({ currentStep, onClickHandler }) => {
	if (currentStep === 1) {
		return (
			<AnimatePresence>
				<motion.div
					key='Question1'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2>Hello from Question1 component!</h2>
					<button onClick={onClickHandler}>Next Question</button>
				</motion.div>
			</AnimatePresence>
		);
	} else {
		return null;
	}
};

export default Question1;
