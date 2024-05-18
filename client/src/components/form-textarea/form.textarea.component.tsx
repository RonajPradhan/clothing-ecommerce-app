import React from 'react';
import './form.textarea.styles.scss';

const FormTextArea = ({ handleOnChange, label, ...otherProps }: any) => {
	return (
		<div className="group">
			<textarea className="form-textarea" {...otherProps} />
			{label ? (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormTextArea;
