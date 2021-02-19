import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useReducer } from 'react';
import MasterForm from './components/MasterForm';
import './styles/app.min.css';

export const FormContext = createContext();

const initialFormState = {
	currentStep: 0,
	currentQuestion: 1,
	isSimpleModalOpen: false,
	isIntroductoryCallModalOpen: false,
	simpleModalHeadingText: '',
	checkedOptions: []
};

const formReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT_CURRENT_STEP':
			return {
				...state,
				currentStep: state.currentStep + 1
			};

		case 'INCREMENT_CURRENT_STEP_AND_QUESTION':
			return {
				...state,
				currentStep: state.currentStep + 1,
				currentQuestion: state.currentQuestion + 1
			};

		default:
			return {
				...state
			};
	}
};

const App = () => {
	const [state, dispatch] = useReducer(formReducer, initialFormState);

	return (
		<div className='app'>
			<FormContext.Provider value={{ formState: state, formDispatch: dispatch }}>
				<MasterForm />
			</FormContext.Provider>
		</div>
	);
};

export default App;
