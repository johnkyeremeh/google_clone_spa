import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from "./components/homepage.js"
import SearchPage from "./pages/searchResult.js"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import searchButtons from "./reducer/searchButton.js" 
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    searchButtons: searchButtons
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk)))


const App = () => {
    return (
    <div className="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
        Let's Build Google

    </div>)    
}


ReactDOM.render(<App />, document.getElementById('app'));