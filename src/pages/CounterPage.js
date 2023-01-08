import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const INPUT_ADD_VALUE = 'input-add-value';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            };
        case INPUT_ADD_VALUE:
            return {
                ...state,
                valueToAdd: action.payload,
            };
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            };
        default:
            return state;
    }
};

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: INPUT_ADD_VALUE,
            payload: value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
    }

    return (
        <Panel className="mt-4">
            <h1 className="text-lg m-3">Total Count = {state.count}</h1> 
                <div className="flex flex-row m-3">
                    <Button className="m-1" onClick={increment} success>Increment</Button>
                    <Button className="m-1" onClick={decrement} danger>Decrement</Button>
                </div>

            <form className="flex" onSubmit={handleSubmit}>
                <label className="m-3">Add number:</label>
                <input 
                value={state.valueToAdd || ""}
                onChange={handleChange}
                type="number" 
                className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button className="m-3" secondary>Submit to Count</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;