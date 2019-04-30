import mainReducer from "./mainReducer"
import boxReducer from "./boxReducer"
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
   main: mainReducer,
   box: boxReducer
})

export default rootReducer;