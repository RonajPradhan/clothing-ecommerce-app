import React from 'react';
import './custom.button.styles.scss';

interface Props {
	isGoogleSignedIn?: boolean;
	type?: 'button' | 'submit' | undefined;
	onClick?: any;
	inverted?: boolean;
}

const CustomButton: React.FC<Props> = ({
	children,
	isGoogleSignedIn,
	inverted,
	...props
}) => {
	return (
		<button
			className={`${inverted ? 'invereted' : ''} ${
				isGoogleSignedIn ? 'google-sign-in' : ''
			} custom-button`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;
