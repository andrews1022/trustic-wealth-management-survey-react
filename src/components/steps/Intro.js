import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOut } from './../../animations/Animations';
import { ReactComponent as IntroSVG } from './../../images/intro.svg';
import { titles } from './../../data/data';

const Intro = ({ currentStep, onClickHandler, openSimpleModal }) => {
	if (currentStep === 0) {
		return (
			<AnimatePresence exitBeforeEnter>
				<motion.div
					variants={fadeInOut}
					initial='hidden'
					animate='show'
					exit='exit'
					key='intro'
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
							<div className='intro__button-row'>
								<button
									className='intro__button button button--hollow button--large'
									onClick={openSimpleModal}
									data-simple-modal-opener='intro'
								>
									Download Survey Results
								</button>
								<button
									className='intro__button button button--solid button--large'
									onClick={onClickHandler}
								>
									Start Survey
								</button>
							</div>
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
