// store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage'; // Import async storage
import rootReducer from '../rootreducer/rootreducer';

const persistConfig = {
    key: 'root',
    storage: storage, // Use async storage here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
