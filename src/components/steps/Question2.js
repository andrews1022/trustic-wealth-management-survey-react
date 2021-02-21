import React, { useContext } from 'react';

// context
import { FormContext } from './../../App';

// data
import { titles, options } from './../../data/data';

// svg
import QuestionSVG from './../svgs/QuestionSVG';

const Question2 = () => {
	const formContext = useContext(FormContext);

	return (
		<>
			{formContext.formState.currentStep === 2 ? (
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
													onChange={(e) =>
														formContext.formDispatch({
															type: 'OPTION_CHECKED',
															id:
																formContext.formState.checkedOptions.indexOf(e.target.id) === -1
																	? formContext.formState.checkedOptions.concat(e.target.id)
																	: formContext.formState.checkedOptions.filter(
																			(option) => option !== e.target.id
																	  )
														})
													}
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
								onClick={() =>
									formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP_AND_QUESTION' })
								}
							>
								Next Question
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

export default Question2;
