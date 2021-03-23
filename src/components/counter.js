import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/component-redux/actions";
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import './counter.css';


function Counter(){
    const counter = useSelector(state => state.counterReducer.counter);
    const loading = useSelector(state => state.counterReducer.loading)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({
            type: actions.INCREMENT_VALUE,
        })
    }

    const handleDecrement = () => {
        dispatch({
            type: actions.DECREMENT_VALUE,
        })
    }

    return(
        <>
            <div className='Counter'>
                <h1>Counter</h1>
                <h2>{counter}</h2>
                <div>
                    <Button className='Buttons' loading={loading} variant="contained" type="primary" onClick={() => handleIncrement()}><PlusOutlined /></Button>
                    <Button className='Buttons' loading={loading} variant="contained" type="primary" onClick={() => handleDecrement()}><MinusOutlined /></Button>
                </div>
            </div>
        </>
    )
}

export default Counter;