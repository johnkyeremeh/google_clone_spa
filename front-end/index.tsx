import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from "./components/homepage.js"
import SearchPage from "./pages/searchResult.js"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import SearchButtonsReducer from "./reducer/searchButton.js"
import SearchReducer from "./reducer/search.js"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    searchButtons: SearchButtonsReducer,
    search: SearchReducer
  });

  const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

  export const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk)))

const App = () => {
    return (
    <div className="app">
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
        </Provider>
    </div>)    
}


ReactDOM.render(<App />, document.getElementById('app'));