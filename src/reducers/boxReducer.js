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
        default: return state
    }
}

export default boxReducer