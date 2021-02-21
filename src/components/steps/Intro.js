import React, { useContext } from 'react';

// context
import { FormContext } from './../../App';

// svg
import IntroSVG from './../svgs/IntroSVG';

// data
import { titles } from './../../data/data';

const Intro = () => {
	const formContext = useContext(FormContext);

	return (
		<>
			{formContext.formState.currentStep === 0 ? (
				<div className='intro'>
					<div className='intro__row'>
						<div className='intro__box'>
							<h2 className='intro__heading'>
								{
									titles[titles.map((el) => el.step).indexOf(formContext.formState.currentStep)]
										.title
								}
							</h2>
							<p className='intro__copy'>
								Want to find out what they said now? Download the survey results!
							</p>
							<div className='intro__button-row'>
								<button
									className='intro__button button button--hollow button--large'
									onClick={() =>
										formContext.formDispatch({
											type: 'OPEN_SIMPLE_MODAL',
											text: 'Download the Survey Results'
										})
									}
								>
									Download Survey Results
								</button>
								<button
									className='intro__button button button--solid button--large'
									onClick={() => formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP' })}
								>
									Start Survey
								</button>
							</div>
						</div>
						<div className='intro__box'>
							<IntroSVG className='intro__svg' />
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Intro;
