//always updated state be return object becuase object is not reference so it will not 
//merge update value with the last vale otherwise it will overwrite sol always return new 
//object with its key with its value wehther updated or not
/*
-may be we will have three issues with redux
- first typo with type
-second reducer get bi an big
- third is state immutabaility imagine you will copy evey state in an object to 
update one state fort that we have redux toolkit npm install @reduxjs/toolkit
*/
// redux example
// import { createStore } from 'redux';
// export const increment = "increment";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
// reux toolkit example

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter';
import authReducer from './Auth';

const store = configureStore({
  reducer: {counter: counterReducer, auth: authReducer }
});

export default store;