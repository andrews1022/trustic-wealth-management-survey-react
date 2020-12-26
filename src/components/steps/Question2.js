import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOut } from './../../animations/Animations';
import { titles, options } from './../../data/data';
import { ReactComponent as QuestionSVG } from './../../images/question.svg';

const Question2 = ({ currentStep, currentQuestion, onClickHandler, handleCheckedOptions }) => {
	if (currentStep === 2) {
		return (
			<div className={`question question--${currentQuestion}`}>
				<div className='question__row'>
					<AnimatePresence exitBeforeEnter>
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
					</AnimatePresence>
					<div className='question__box'>
						<QuestionSVG className='question__svg' />
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Question2;
