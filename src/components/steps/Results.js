import React from 'react';
import Footer from './../Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { titles, options } from './../../data/data';

const Results = ({ checkedOptions }) => {
	const wasSelected = (option) => (checkedOptions.indexOf(option.id) > -1 ? 'selected' : '');

	return (
		<AnimatePresence>
			<motion.div
				key='Results'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className='results'
			>
				<div className='results__hero-text'>
					<h2 className='results__heading'>
						See how your answers align with other Canadians. Download the complete survey results to
						get the full picture, or get in touch to start planning.
					</h2>
					<p className='results__reminder'>
						Below are the answers other Canadian's selected.
						<br />
						The highlighted answers are the ones you also selected.
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

				<Footer />
			</motion.div>
		</AnimatePresence>
	);
};

export default Results;
