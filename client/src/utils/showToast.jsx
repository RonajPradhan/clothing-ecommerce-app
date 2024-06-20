import { toast, Slide, ToastOptions, Bounce, Zoom } from 'react-toastify';

export function showToast(message = '', type = '') {
	function toastType(type) {
		switch (type) {
			case 'dark':
				return toast.type;
			case 'error':
				return toast.type;
			case 'info':
				return toast.type;
			case 'success':
				return toast.type;
			case 'warning':
				return toast.type;
			default:
				return toast.type;
		}
	}

	toast(message, {
		position: 'top-center',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
		type: toastType(type),
		transition: Zoom,
	});
}
