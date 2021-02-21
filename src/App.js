import React, { createContext, useReducer } from 'react';

// animations
import { AnimatePresence } from 'framer-motion';

// components
import MasterForm from './components/MasterForm';

// reducer
import { initialFormState, formReducer } from './reducer/formReducer';

// styles
import './scss/app.min.css';

export const FormContext = createContext();

const App = () => {
	const [state, dispatch] = useReducer(formReducer, initialFormState);

	return (
		<div className='app'>
			<FormContext.Provider value={{ formState: state, formDispatch: dispatch }}>
				<AnimatePresence exitBeforeEnter>
					<MasterForm />
				</AnimatePresence>
			</FormContext.Provider>
		</div>
	);
};

export default App;
