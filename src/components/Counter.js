import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {

  const dispatch=useDispatch();


const counter = useSelector((state) => state.counter.counter);


const show = useSelector((state) => state.counter.showCounter);

   const toggleCounterHandler = () => {
     dispatch(counterActions.toggleCounter());
   };

    const incrementHandler = () => {
      dispatch(counterActions.increment());
    };

   
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

 




  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
  {  show &&(  <div className={classes.value}>{counter}</div>)}
      <button onClick={incrementHandler}>increment</button>
     
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
