import React, { useState } from 'react';

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

const MasterForm = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [isSimpleModalOpen, setIsSimpleModalOpen] = useState(false);
	const [isIntroductoryCallModalOpen, setIsIntroductoryCallModalOpen] = useState(false);

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
	const openSimpleModal = () => setIsSimpleModalOpen(true);
	const closeSimpleModal = () => setIsSimpleModalOpen(false);
	const openIntroductoryCallModal = () => setIsIntroductoryCallModalOpen(true);
	const closeIntroductoryCallModal = () => setIsIntroductoryCallModalOpen(false);

	if (currentStep !== 4) {
		return (
			<div className='master-form'>
				<Nav
					openSimpleModal={openSimpleModal}
					openIntroductoryCallModal={openIntroductoryCallModal}
				/>
				<Intro
					currentStep={currentStep}
					onClickHandler={incremenetCurrentStep}
					openSimpleModal={openSimpleModal}
				/>
				<Question1
					currentStep={currentStep}
					onClickHandler={incrementCurrentStepAndCurrentQuestion}
				/>
				<Question2
					currentStep={currentStep}
					onClickHandler={incrementCurrentStepAndCurrentQuestion}
				/>
				<Question3 currentStep={currentStep} onClickHandler={incremenetCurrentStep} />

				<SimpleModal isSimpleModalOpen={isSimpleModalOpen} closeSimpleModal={closeSimpleModal} />

				<IntroductoryCallModal
					isIntroductoryCallModalOpen={isIntroductoryCallModalOpen}
					closeIntroductoryCallModal={closeIntroductoryCallModal}
				/>
			</div>
		);
	} else {
		return (
			<div className='master-form'>
				<Results currentStep={currentStep} />
			</div>
		);
	}
};

export default MasterForm;
