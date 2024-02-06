import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

function Home(){
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className="font-squada-one">{count}</h1>
            <button aria-label="Increment" onClick={() => dispatch(increment())}>Increment</button>
            <button aria-label="Decrement" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Home;