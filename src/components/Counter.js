import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch=useDispatch();

  const counter =useSelector(state=>state.counter);
  const toggleCounterHandler = () => {};
  const incrementHandler=()=>{
     dispatch({ type: "INCREMENTBY2" });
  }

  const decrementHandler=()=>{
      dispatch({ type: "DECREMENTBY2" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>incremnt</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
