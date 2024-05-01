import React from 'react';
import './with-spinner.styles.scss';

const Spinner = () => {
	return (
		<div className="spinnerOverlay">
			<div className="spinnerContainer" />
		</div>
	);
};

const WithSpinner =
	(WrappedComponent: any) =>
	({ isLoading, ...otherProps }: any) => {
		return isLoading.loading ? (
			<Spinner />
		) : (
			<WrappedComponent {...otherProps} />
		);
	};

export default WithSpinner;
