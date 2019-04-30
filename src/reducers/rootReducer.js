import containerReducer from "./containerReducer"
import boxReducer from "./boxReducer"
import {combineReducers} from 'redux'
import paletteReducer from "./paletteReducer";
import paletteContainerReducer from "./paletteContainerReducer"

const rootReducer = combineReducers({
   container: containerReducer,
   box: boxReducer,
   paletteContainer: paletteContainerReducer,
   palette: paletteReducer
})

export default rootReducer;