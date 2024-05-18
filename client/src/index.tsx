import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ErrorBoundary } from 'react-error-boundary';
import FallBack from './components/error-boundary/error-boundary.component';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();