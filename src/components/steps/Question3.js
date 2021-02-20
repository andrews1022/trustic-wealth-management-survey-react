import React, { useContext } from 'react';

// context
import { FormContext } from './../../App';

// animations
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOut } from './../../animations/Animations';

// data
import { titles, options } from './../../data/data';

// svg
import QuestionSVG from './../svgs/QuestionSVG';

const Question3 = ({ handleCheckedOptions }) => {
	const formContext = useContext(FormContext);

	return (
		<>
			{formContext.formState.currentStep === 3 ? (
				<div className={`question question--${formContext.formState.currentQuestion}`}>
					<div className='question__row'>
						<div className='question__box'>
							<h4>Question {formContext.formState.currentQuestion}/3</h4>
							<h2 className='question__heading'>
								{
									titles[titles.map((el) => el.step).indexOf(formContext.formState.currentStep)]
										.title
								}
							</h2>
							<ul className='question__list'>
								{options.map(
									(option) =>
										option.forQuestion === formContext.formState.currentQuestion && (
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
							<button
								className='button button--hollow button--large'
								onClick={() => formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP' })}
							>
								See Results
							</button>
						</div>

						<div className='question__box'>
							<QuestionSVG className='question__svg' />
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Question3;
