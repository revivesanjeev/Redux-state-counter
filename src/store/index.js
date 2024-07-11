import { createStore } from "redux"; // Correct import from 'redux'

const counterReducer = (state = { counter: 5 }, action) => {
  if (action.type === "INCREMENTBY2") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "DECREMENTBY2") {
    return {
      counter: state.counter - 2,
    };
  }


   if (action.type === "increase") {
     return {
       counter: state.counter + action.value,
     };
   }
  return state;
};

const store = createStore(counterReducer);

export default store;
