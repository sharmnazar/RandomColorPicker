import boxReducer from "./boxReducer"
import {combineReducers} from 'redux'
import paletteReducer from "./paletteReducer";

const rootReducer = combineReducers({
   box: boxReducer,
   palette: paletteReducer
})

export default rootReducer;