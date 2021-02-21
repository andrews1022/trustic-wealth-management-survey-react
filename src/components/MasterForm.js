import React, { useContext } from 'react';

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

// animations
import { motion } from 'framer-motion';
import { fadeInOut } from './../animations/Animations';

const MasterForm = () => {
	// context
	const formContext = useContext(FormContext);

	return (
		<>
			{formContext.formState.currentStep !== 4 ? (
				<div className='master-form'>
					<Nav />

					<motion.div
						variants={fadeInOut}
						initial='hidden'
						animate='show'
						exit='exit'
						key={formContext.formState.currentStep}
						className='master-form__inner'
					>
						<Intro />
						<Question1 />
						<Question2 />
						<Question3 />
					</motion.div>

					<SimpleModal />
					<IntroductoryCallModal />
				</div>
			) : (
				<motion.div
					variants={fadeInOut}
					initial='hidden'
					animate='show'
					exit='exit'
					key={formContext.formState.currentStep}
				>
					<Results />
					<SimpleModal />
					<IntroductoryCallModal />
				</motion.div>
			)}
		</>
	);
};

export default MasterForm;
