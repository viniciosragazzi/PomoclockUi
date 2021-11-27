import  { createStore } from 'redux';
const INITIAL_STATE = {
    contador:0
}
function reducer(state = INITIAL_STATE, action){

    if(action.contador>=0){
        return { ...state, contador: action.contador+1  }
    }
    return state
}

const store = createStore(reducer);

export default store;