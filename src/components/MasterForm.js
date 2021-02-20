import React, { useContext, useState } from 'react';

// context
import { FormContext } from './../App';

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
	// context
	const formContext = useContext(FormContext);
	console.log(formContext);

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
		} else if (opener === 'intro' || opener === 'footer') {
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
		// get id of clicked element
		const elementId = e.target.id;

		// if checked option is not found in checkedOptions state...
		if (checkedOptions.indexOf(elementId) === -1) {
			// add it
			setCheckedOptions(checkedOptions.concat(elementId));
		} else {
			// remove if already in array
			setCheckedOptions(checkedOptions.filter((option) => option !== elementId));
		}
	};

	if (formContext.formState.currentStep !== 4) {
		return (
			<div className='master-form'>
				<Nav />

				<div className='master-form__inner'>
					<Intro />
					<Question1 handleCheckedOptions={handleCheckedOptions} />
					<Question2 handleCheckedOptions={handleCheckedOptions} />
					<Question3 handleCheckedOptions={handleCheckedOptions} />
				</div>

				<SimpleModal />
				<IntroductoryCallModal />
			</div>
		);
	} else {
		return (
			<div>
				<Results
					checkedOptions={checkedOptions}
					openSimpleModal={openSimpleModal}
					openIntroductoryCallModal={openIntroductoryCallModal}
				/>
				<SimpleModal />
				<IntroductoryCallModal />
			</div>
		);
	}
};

export default MasterForm;
