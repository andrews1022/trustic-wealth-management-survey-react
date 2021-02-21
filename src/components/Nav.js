import React, { useContext } from 'react';

// context
import { FormContext } from './../App';

const Nav = () => {
	const formContext = useContext(FormContext);

	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li
					className='nav__item'
					onClick={() => formContext.formDispatch({ type: 'OPEN_INTRODUCTORY_CALL_MODAL' })}
				>
					Book an introductory call
				</li>
				<li
					className='nav__item'
					onClick={() =>
						formContext.formDispatch({
							type: 'OPEN_SIMPLE_MODAL',
							text: 'Sign Up and Stay Informed'
						})
					}
				>
					Sign up for future retirement insights
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
