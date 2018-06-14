import {combineReducers} from "redux";
import {testReducer} from '../../features/event/testArea/testReducer'
const rootReducer = combineReducers({
    test:testReducer
})
export default rootReducer