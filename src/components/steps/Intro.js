import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as IntroSVG } from './../../images/intro.svg';
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
					transition={{ duration: 1.5 }}
					className='intro'
				>
					<div className='intro__row'>
						<div className='intro__box'>
							<h2 className='intro__heading'>
								{titles[titles.map((el) => el.step).indexOf(currentStep)].title}
							</h2>
							<p className='intro__copy'>
								Want to find out what they said now? Download the survey results.
							</p>
							<button
								className='intro__button intro__button--hollow'
								onClick={openSimpleModal}
								data-simple-modal-opener='intro'
							>
								Download Survey Results
							</button>
							<button className='intro__button intro__button--solid' onClick={onClickHandler}>
								Start Survey
							</button>
						</div>
						<div className='intro__box'>
							<IntroSVG className='intro__svg' />
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		);
	} else {
		return null;
	}
};

export default Intro;
