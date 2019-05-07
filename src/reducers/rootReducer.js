import containerReducer from "./containerReducer"
import {combineReducers} from 'redux'
import paletteContainerReducer from "./paletteContainerReducer"

const rootReducer = combineReducers({
   container: containerReducer,
   paletteContainer: paletteContainerReducer,
})

export default rootReducer;