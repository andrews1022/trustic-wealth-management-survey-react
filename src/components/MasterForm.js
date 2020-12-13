import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// components
import Nav from './Nav';

// form steps
import Intro from './steps/Intro';
import Question1 from './steps/Question1';
import Question2 from './steps/Question2';
import Question3 from './steps/Question3';
import Results from './steps/Results';

// modals
import IntroductoryCallModal from './modals/IntroductoryCallModal';
import SimpleModal from './modals/SimpleModal';

// import svgs
import { ReactComponent as IntroSVG } from './../images/intro.svg';
import { ReactComponent as QuestionSVG } from './../images/question.svg';

const MasterForm = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [isSimpleModalOpen, setIsSimpleModalOpen] = useState(false);
	const [isIntroductoryCallModalOpen, setIsIntroductoryCallModalOpen] = useState(false);
	const [simpleModalHeadingText, setSimpleModalHeadingText] = useState('');
	const [checkedOptions, setCheckedOptions] = useState([]);

	// increment current step
	const incremenetCurrentStep = () => {
		setCurrentStep(currentStep + 1);
	};

	// increment current step and question#
	const incrementCurrentStepAndCurrentQuestion = () => {
		setCurrentStep(currentStep + 1);
		setCurrentQuestion(currentQuestion + 1);
	};

	// modal functions
	const openSimpleModal = (e) => {
		const opener = e.target.dataset.simpleModalOpener;

		if (opener === 'nav') {
			setSimpleModalHeadingText('Sign Up and Stay Informed');
		} else if (opener === 'intro') {
			setSimpleModalHeadingText('Download the Survey Results');
		} else {
			setSimpleModalHeadingText('Sign Up and Stay Informed');
		}

		setIsSimpleModalOpen(true);
	};
	const closeSimpleModal = () => setIsSimpleModalOpen(false);
	const openIntroductoryCallModal = () => setIsIntroductoryCallModalOpen(true);
	const closeIntroductoryCallModal = () => setIsIntroductoryCallModalOpen(false);

	// handle adding/removing clicked options from state array
	const handleCheckedOptions = (e) => {
		const elementId = e.target.id;

		if (checkedOptions.indexOf(elementId) !== -1) {
			// remove if already in array
			setCheckedOptions(checkedOptions.filter((option) => option !== elementId));
		} else {
			// add it otherwise
			setCheckedOptions(checkedOptions.concat(elementId));
		}
	};

	if (currentStep !== 4) {
		return (
			<div className='master-form'>
				<Nav
					openSimpleModal={openSimpleModal}
					openIntroductoryCallModal={openIntroductoryCallModal}
				/>

				<div className='master-form__inner'>
					<Intro
						currentStep={currentStep}
						onClickHandler={incremenetCurrentStep}
						openSimpleModal={openSimpleModal}
					/>
					<Question1
						currentStep={currentStep}
						currentQuestion={currentQuestion}
						onClickHandler={incrementCurrentStepAndCurrentQuestion}
						handleCheckedOptions={handleCheckedOptions}
					/>
					<Question2
						currentStep={currentStep}
						currentQuestion={currentQuestion}
						onClickHandler={incrementCurrentStepAndCurrentQuestion}
						handleCheckedOptions={handleCheckedOptions}
					/>
					<Question3
						currentStep={currentStep}
						currentQuestion={currentQuestion}
						onClickHandler={incremenetCurrentStep}
						handleCheckedOptions={handleCheckedOptions}
					/>

					{currentStep === 0 ? <IntroSVG /> : <QuestionSVG />}
				</div>

				<SimpleModal
					isSimpleModalOpen={isSimpleModalOpen}
					closeSimpleModal={closeSimpleModal}
					simpleModalHeadingText={simpleModalHeadingText}
				/>
				<IntroductoryCallModal
					isIntroductoryCallModalOpen={isIntroductoryCallModalOpen}
					closeIntroductoryCallModal={closeIntroductoryCallModal}
				/>
			</div>
		);
	} else {
		return <Results currentStep={currentStep} checkedOptions={checkedOptions} />;
	}
};

export default MasterForm;
