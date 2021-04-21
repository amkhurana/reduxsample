import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const islogged = useSelector(state => state.islogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(9))}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
