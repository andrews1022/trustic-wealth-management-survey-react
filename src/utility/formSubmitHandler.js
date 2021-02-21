import React, { useContext } from 'react';
import { FormContext } from './../App';

const formContext = useContext(FormContext);

export const formSubmitHandler = (e) => {
	e.preventDefault();
	formContext.formDispatch({ type: 'FORM_IS_NOT_SUBMITTED' });
};
