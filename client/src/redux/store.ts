import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import rootReducer from './root-reducer';

const logger = createLogger();
const middlewares = [logger];

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(...middlewares),
});

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
