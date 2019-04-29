let initState={
    color: '#5e505b',
} 

const mainReducer = (state=initState, action) =>{
    if(action.type==='CHANGE_COLOR'){
        return {
            ...state,
            color: action.color
        }
    }
    else{
        return{
            ...state
        }
    }
}

export default mainReducer