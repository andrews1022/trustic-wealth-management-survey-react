export const initialFormState = {
	currentStep: 0,
	currentQuestion: 1,
	isSimpleModalOpen: false,
	isIntroductoryCallModalOpen: false,
	simpleModalHeadingText: '',
	checkedOptions: [],
	formIsSubmitted: false
};

export const formReducer = (state, action) => {
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

		case 'OPTION_CHECKED':
			return {
				...state,
				checkedOptions: action.id
			};

		case 'FORM_IS_SUBMITTED':
			return {
				...state,
				formIsSubmitted: true
			};

		case 'FORM_IS_NOT_SUBMITTED':
			return {
				...state,
				formIsSubmitted: false
			};

		case 'RESTART_SURVEY':
			return initialFormState;

		default:
			return {
				...state
			};
	}
};
