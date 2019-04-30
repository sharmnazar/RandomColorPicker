let initState={
    numOfPalettes: 1,
}

const paletteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PALETTE':
            console.log("added palette");
            return {
                ...state,
                numOfPalettes: action.numOfPalettes
            }
        default: return state
    }
}

export default paletteReducer