import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { titles } from './../../data/data';

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
					className='intro'
				>
					<h2 className='intro__heading'>
						{titles[titles.map((el) => el.step).indexOf(currentStep)].title}
					</h2>
					<p className='intro__copy'>
						Want to find out what they said now? Download the survey results.
					</p>
					<button
						className='intro__button'
						onClick={openSimpleModal}
						data-simple-modal-opener='intro'
					>
						Download Survey Results
					</button>
					<button className='intro__button' onClick={onClickHandler}>
						Start Survey
					</button>
				</motion.div>
			</AnimatePresence>
		);
	} else {
		return null;
	}
};

export default Intro;
