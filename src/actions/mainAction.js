import axios from 'axios';

export function loadColor(){
    return(dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            dispatch(changeColor("#"+response.data.new_color))
        }).catch((err)=>{
                dispatch({
                    type: 'CHANGE_COLOR_ERROR',
                    err 
                })
            })
    }
}

export function changeColor(color){
    return {
        type: 'CHANGE_COLOR',
        color
    }
}

export function addBox(numOfBoxes){
    return {
        type: 'ADD_BOX',
        numOfBoxes: numOfBoxes+1
    }
}

