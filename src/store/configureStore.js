import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import placesReducer from "./reducers/places";
import uiReducer from "./reducers/ui";
import authReducer from "./reducers/auth";
import createSagaMiddleware from "redux-saga";
import { watchAuth } from "./sagas/index";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(watchAuth);

  return { store, persistor };
};

const { store, persistor } = configureStore();

export { store, persistor };
