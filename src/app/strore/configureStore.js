import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from "redux-devtools-extension";
import rootReducer from '../reducers/rootReducer'

const conFigureStore= (preloadeState)=>{

   const  middlewire= [];
   const middlewireEnhancer = applyMiddleware(...middlewire)
   const storeEnhancer = [middlewireEnhancer]
   const composedEnhancer = composeWithDevTools(...storeEnhancer)

   const store = createStore(
       rootReducer,
       preloadeState,
        composedEnhancer
   )
   return store;
}
export default conFigureStore;