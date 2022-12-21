import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import stocksReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favorite"],
};

const rootReducer = combineReducers({
  stocksReducer: persistReducer(persistConfig, stocksReducer),
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
