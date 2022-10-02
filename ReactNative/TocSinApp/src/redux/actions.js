// const [pinAdress, setPinAdress] = React.useState("")
// const [pinCoordinate, setPinCoordinate] = React.useState(
//     { latitude : 0 , longitude : 0 }
//     )


export const SET_PIN_ADRESS = 'SET_PIN_ADRESS';
export const SET_PIN_COORDINATE = 'SET_PIN_COORDINATE';

export const setPinAdress = pinAdress => dispatch =>{
    dispatch({
        type: SET_PIN_ADRESS,
        payload: pinAdress,
    });
};

export const setPinCoordinate = pinCoordinate => dispatch =>{
    dispatch({
        type: SET_PIN_COORDINATE,
        payload: pinCoordinate,
    });
};
