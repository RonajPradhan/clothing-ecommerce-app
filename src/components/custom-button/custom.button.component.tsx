import React from 'react';
import './custom.button.styles.scss';

interface Props {
	isGoogleSignedIn?: boolean;
	type?: 'button' | 'submit' | undefined;
	onClick?: () => {};
}

const CustomButton: React.FC<Props> = ({
	children,
	isGoogleSignedIn,
	...props
}) => {
	return (
		<button
			className={`custom-button ${isGoogleSignedIn ? 'google-sign-in' : ''}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;
