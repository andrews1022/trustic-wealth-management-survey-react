import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOut } from './../../animations/Animations';
import { titles, options } from './../../data/data';
import { ReactComponent as QuestionSVG } from './../../images/question.svg';

const Question1 = ({ currentStep, currentQuestion, onClickHandler, handleCheckedOptions }) => {
	if (currentStep === 1) {
		return (
			<AnimatePresence exitBeforeEnter>
				<motion.div
					variants={fadeInOut}
					initial='hidden'
					animate='show'
					exit='exit'
					key='question 1 container'
					className={`question question--${currentQuestion}`}
				>
					<div className='question__row'>
						<motion.div
							variants={fadeInOut}
							initial='hidden'
							animate='show'
							exit='exit'
							key='question 1 left hand box'
							className='question__box'
						>
							<h2 className='question__heading'>
								{titles[titles.map((el) => el.step).indexOf(currentStep)].title}
							</h2>
							<ul className='question__list'>
								{options.map(
									(option) =>
										option.forQuestion === currentQuestion && (
											<li className='question__item' key={option.id}>
												<input
													className='question__checkbox'
													type='checkbox'
													id={option.id}
													onChange={handleCheckedOptions}
												/>
												<label className='question__label' htmlFor={option.id}>
													{option.questionText}
												</label>
											</li>
										)
								)}
							</ul>
							<button className='button button--hollow button--large' onClick={onClickHandler}>
								Next Question
							</button>
						</motion.div>

						<div className='question__box'>
							<QuestionSVG className='question__svg' />
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		);
	} else {
		return null;
	}
};

export default Question1;
