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
	checkedOptions: [],
	formIsSubmitted: false
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

		case 'OPEN_SIMPLE_MODAL':
			return {
				...state,
				isSimpleModalOpen: true,
				simpleModalHeadingText: action.text
			};

		case 'CLOSE_SIMPLE_MODAL':
			return {
				...state,
				isSimpleModalOpen: false
			};

		case 'OPEN_INTRODUCTORY_CALL_MODAL':
			return {
				...state,
				isIntroductoryCallModalOpen: true
			};

		case 'CLOSE_INTRODUCTORY_CALL_MODAL':
			return {
				...state,
				isIntroductoryCallModalOpen: false
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
