import actions from "./actions";

const initialState = {
    counter: 0,
    loading: false
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.INCREMENT_VALUE:
            return{
                ...state,
                loading: true,
            }
        case actions.INCREMENT_VALUE_SUCCESS:
            return{
                ...state,
                counter: state.counter + 1,
                loading: false,
            }
        case actions.INCREMENT_VALUE_FAILED:
            return{
                ...state,
                loading: false,
            }
        case actions.DECREMENT_VALUE:
            return{
                ...state,
                loading: true,
            }
        case actions.DECREMENT_VALUE_SUCCESS:
            return{
                ...state,
                counter: state.counter - 1,
                loading: false,
            }
        case actions.DECREMENT_VALUE_FAILED:
            return{
                ...state,
                loading: false,
            }
        default:
            return{
                ...state,
            }
    }
}

export default counterReducer;