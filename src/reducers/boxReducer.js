let initState={
    numOfBoxes: 1,
    color: '#5e505b',
}

const boxReducer = (state = initState, action) => {
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
        case 'ADD_BOX':
            console.log("added box");
            return {
                ...state,
                numOfBoxes: action.numOfBoxes
            }
        default: return state
    }
}

export default boxReducer