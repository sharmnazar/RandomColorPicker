let initState={
    color: '#5e505b',
} 

const mainReducer = (state=initState, action) =>{
    switch (action.type) {
        case 'CHANGE_COLOR' : 
            console.log("changed color");
            return {
                ...state,
                color: action.color
            }
        case 'CHANGE_COLOR_ERROR' : 
            console.log("change color had an error", action.err);
            return state;
        default: return state
    }
}

export default mainReducer