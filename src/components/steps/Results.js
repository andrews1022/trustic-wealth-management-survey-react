import React, { useContext } from 'react';

// context
import { FormContext } from './../../App';

// components
import Footer from './../Footer';

// data
import { titles, options } from './../../data/data';

const Results = () => {
	// context
	const formContext = useContext(FormContext);

	// find the options that were selected
	// for any that were, return string of 'selected' (used for styling)
	const wasSelected = (option) =>
		formContext.formState.checkedOptions.indexOf(option.id) > -1 ? 'selected' : '';

	return (
		<div className='results'>
			<div className='results__inner'>
				<div className='results__hero-text'>
					<h2 className='results__heading'>See how your answers align with other Canadians.</h2>
					<h3 className='results__sub-heading'>
						Download the complete survey results to get the full picture of what other Canadians
						selected, or get in touch to start planning.
					</h3>
					<p className='results__reminder'>
						Below are the answers other Canadian's selected. The highlighted answers are the ones
						you also selected.
					</p>
					<div className='results__selections'>
						<div className='results__selections-box'></div>
						<p className='results__selections-text'>= your selections</p>
					</div>
				</div>

				<div className='results__divider'></div>

				<div className='results__answers'>
					<h3 className='results__answers-heading'>{titles[0].title}</h3>
					<ul className='results__answers-list'>
						{options
							.filter((option) => option.forQuestion === 1)
							.map((option) => (
								<li className='results__answers-item' key={option.id}>
									<span className={`results__answers-text ${wasSelected(option)}`}>
										{option.questionText}
									</span>
									<div
										className={`results__answers-percent-bar ${wasSelected(option)}`}
										style={{ width: `${option.percentAnswered}%` }}
									></div>
								</li>
							))}
					</ul>
				</div>

				<div className='results__divider'></div>

				<div className='results__answers'>
					<h3 className='results__answers-heading'>{titles[1].title}</h3>
					<ul className='results__answers-list'>
						{options
							.filter((option) => option.forQuestion === 2)
							.map((option) => (
								<li className='results__answers-item' key={option.id}>
									<span className={`results__answers-text ${wasSelected(option)}`}>
										{option.questionText}
									</span>
									<div
										className={`results__answers-percent-bar ${wasSelected(option)}`}
										style={{ width: `${option.percentAnswered}%` }}
									></div>
								</li>
							))}
					</ul>
				</div>

				<div className='results__divider'></div>

				<div className='results__answers'>
					<h3 className='results__answers-heading'>{titles[2].title}</h3>
					<ul className='results__answers-list'>
						{options
							.filter((option) => option.forQuestion === 3)
							.map((option) => (
								<li className='results__answers-item' key={option.id}>
									<span className={`results__answers-text ${wasSelected(option)}`}>
										{option.questionText}
									</span>
									<div
										className={`results__answers-percent-bar ${wasSelected(option)}`}
										style={{ width: `${option.percentAnswered}%` }}
									></div>
								</li>
							))}
					</ul>
				</div>
			</div>

			<div className='results__divider'></div>

			<div>
				<h3 className='results__answers-heading'>Would you like to take the survey again?</h3>
				<button
					className='results__button button button--hollow button--small'
					onClick={() => formContext.formDispatch({ type: 'RESTART_SURVEY' })}
				>
					Take Survey Again
				</button>
			</div>

			<Footer />
		</div>
	);
};

export default Results;
