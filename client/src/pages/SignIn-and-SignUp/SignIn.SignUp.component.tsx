import React from 'react';
import SignIn from '../../components/SignIn/sign-in.component';
import './SignIn.SignUp.styles.scss';
import SignUp from '../../components/SignUp/sign-up.component';

const SignInAndSignUpPage = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUpPage;
