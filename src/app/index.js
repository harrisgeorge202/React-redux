//================================================
// Simple redux with single reducer
//=================================================
// import { createStore } from "redux";
// const initialState = {
//     result: 1,
//     lastValues: [],
//     username: 'MAAXX'
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD":
//             state = {
//                 ...state,
//                 result: state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             }
//             break;
//         case "SUBTRACT":
//         state ={
//             ...state,
//             result: state.result - action.payload,
//             lastValues: [...state.lastValues, action.payload]
//         }
//             break;
//     }
//     return state
// }

// const store = createStore(reducer)

// store.subscribe(() => {
//     console.log("Store updated", store.getState());
// })


// store.dispatch({
//     type: "ADD",
//     payload: 100
// });
// store.dispatch({
//     type: "ADD",
//     payload: 22
// });
// store.dispatch({
//     type: "SUBTRACT",
//     payload: 300
// });







//================================================
// Redux with multiple reducer and middleware(logger)
//=================================================

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import  logger  from "redux-logger"

// const mathreducer = (state = {
//     result: 1,
//     lastValues: []
// }, action) => {
//     switch (action.type) {
//         case "ADD":
//             state = {
//                 ...state,
//                 result: state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             }
//             break;
//         case "SUBTRACT":
//             state = {
//                 ...state,
//                 result: state.result - action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             }
//             break;
//     }
//     return state
// }


// const userreducer = (state = {
//     name: 'Maxx',
//     age: 21
// }, action) => {
//     switch (action.type) {
//         case "SET_NAME":
//             state = {
//                 ...state,
//                 name: action.payload,
//             }
//             break;
//         case "SET_AGE":
//             state = {
//                 ...state,
//                 age: action.payload
//             }
//             break;
//     }
//     return state
// }

// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action: ", action);
//     next(action)
// }

// const store = createStore(
//     combineReducers({ mathreducer, userreducer }),
//     {},
//     applyMiddleware( logger))

// store.subscribe(() => {
//     // console.log("Store updated", store.getState());
// })


// store.dispatch({
//     type: "ADD",
//     payload: 100
// });
// store.dispatch({
//     type: "ADD",
//     payload: 22
// });
// store.dispatch({
//     type: "SET_AGE",
//     payload: 30
// });



//================================================
// React redux with logger and middleware
//=================================================

// import React from "react";
// import { render } from "react-dom";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger"
// import { Provider } from "react-redux"

// import App from "./container/App";

// const mathreducer = (state = {
//     result: 1,
//     lastValues: []
// }, action) => {
//     switch (action.type) {
//         case "ADD":
//             state = {
//                 ...state,
//                 result: state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             }
//             break;
//         case "SUBTRACT":
//             state = {
//                 ...state,
//                 result: state.result - action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             }
//             break;
//     }
//     return state
// }


// const userreducer = (state = {
//     name: 'Maxx',
//     age: 21
// }, action) => {
//     switch (action.type) {
//         case "SET_NAME":
//             state = {
//                 ...state,
//                 name: action.payload,
//             }
//             break;
//         case "SET_AGE":
//             state = {
//                 ...state,
//                 age: action.payload
//             }
//             break;
//     }
//     return state
// }

// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action: ", action);
//     next(action)
// }

// const store = createStore(
//     combineReducers({ math: mathreducer, user: userreducer }),
//     {},
//     applyMiddleware(logger))

// store.subscribe(() => {
//     console.log("Store updated", store.getState());
// })

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     window.document.getElementById('app'));









import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"

import App from "./container/App";
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';





render(
    <MuiThemeProvider>
    <Provider store={store}>
        <App />
    </Provider>
    </MuiThemeProvider>,

    window.document.getElementById('app'));

