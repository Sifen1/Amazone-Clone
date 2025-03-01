// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import { DataProvider } from './components/DataProvider/DataProvider';
// // import {initialState,reducer} from './Utility/reducer.type'

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <DataProvider reducer={reducer} initialState={initialState}>
// //      <App />
// //     </DataProvider>
// // </React.StrictMode>
// // );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { DataProvider } from './components/DataProvider/DataProvider';
// import { initialState, reducer } from './Utility/reducer.type';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <DataProvider reducer={reducer} initialState={initialState}>
//       <App />
//     </DataProvider>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './components/DataProvider/DataProvider';
import { initialState, reducer } from './Utility/reducer.type';

// Add console logs to debug
console.log("Initial state:", initialState);
console.log("Reducer:", reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);