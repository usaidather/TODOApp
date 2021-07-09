import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';

//import Reducers Here
import noteReducer from './notes/Reducer';

const reducer = combineReducers({
  noteReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);

const persistor = persistStore(store, {}, () => {
  //do anythign if you want to do after restoring the store here
  // hide splash etc
  // SplashScreen.hide();
});

export default function ConfigureStore(props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    </Provider>
  );
}
