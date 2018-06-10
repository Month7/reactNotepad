// import React from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom'
// import './index.css';
// import App from './App';
// import { createStore } from 'redux';
// import notesApp from './reducers';
// import { Provider } from 'react-redux';

// import {
//     addNote,
//     toggleNote,
//     switchShow,
// } from './actions'


// let store = createStore(notesApp);
// store.dispatch(addNote());
// // // store.dispatch(toggleNote({
// // //     title: '测试1',
// // //     content: '测试1',
// // //     favorite: false
// // // }))
// // console.log(store.getState());
// // ReactDOM.render(<App />, document.getElementById('root'));
// render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
// )
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import notesApp from './reducers'
import App from './App'

import {
    addNote,
    toggleNote,
    switchShow,
    updateNote,
} from './actions'

let store = createStore(
    notesApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// store.dispatch(addNote());
// store.dispatch(updateNote({
//     title:'wtf',
//     content:'wtf'
// })) 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
