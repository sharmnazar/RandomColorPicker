let initState={
    numOfBoxes: 1,
}

const boxReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_BOX':
            console.log("added box");
            return {
                ...state,
                numOfBoxes: action.numOfBoxes
            }
        case 'ADD_BOX_ERROR':
            console.log("add box had an error", action.err);
            return state
        default: return state
    }
}

export default boxReducer