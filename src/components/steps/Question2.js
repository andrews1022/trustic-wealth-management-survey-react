import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { titles, options } from './../../data/data';

const Question2 = ({ currentStep, currentQuestion, onClickHandler, handleCheckedOptions }) => {
	if (currentStep === 2) {
		return (
			<AnimatePresence>
				<motion.div
					key='Question2'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className='question'
				>
					<h2>{titles[titles.map((el) => el.step).indexOf(currentStep)].title}</h2>
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
					<button onClick={onClickHandler}>Next Question</button>
				</motion.div>
			</AnimatePresence>
		);
	} else {
		return null;
	}
};

export default Question2;