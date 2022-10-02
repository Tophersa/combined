import { SET_PIN_ADRESS, SET_PIN_COORDINATE} from  './actions'

const initialState = {
    pinAdress: '',
    pinCoordinate: { latitude : 0 , longitude : 0 }

}

function adressReducer(state=initialState, action){
    switch(action.type){
        case SET_PIN_ADRESS:
            return {...state, pinAdress: action.payload};
        case SET_PIN_COORDINATE:
            return {...state, pinCoordinate: action.payload};
        default:
            return state;
    }
}

export default adressReducer;