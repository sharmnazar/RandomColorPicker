let initState={
    palette: [
        '#5e505b',
        '#5e505b',
        '#5e505b',
        '#5e505b',
        '#5e505b',
        '#5e505b',
        '#5e505b'
    ],
} 

const containerReducer = (state=initState, action) =>{
    switch (action.type) {
        case 'CHANGE_PALETTE' : 
            console.log("changed palette");
            return {
                ...state,
                palette: action.palette
            }
        case 'CHANGE_PALETTE_ERROR' : 
            console.log("change palette had an error", action.err);
            return state;
        default: return state
    }
}

export default containerReducer