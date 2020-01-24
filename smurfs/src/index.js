import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware} from 'redux';

const store = createStore(applyMiddleware(thunk, logger));
console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
