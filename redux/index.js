const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore

const combinedReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
const BUY_SNAKERS = "BUY_SNAKERS"

function buyCake(){
    return{
        
            type:BUY_CAKE,
            info:'First redux action'
        
    }
}
function buyIcecream(){
    return{
        type:BUY_ICECREAM
    }
}
function buySnakers(){
    return{
        type:BUY_SNAKERS
    }
}


const initialCakeState = {
    numOfcakes:10,
}
const initialIceCreamState = {
    numofIceCreams:20,
}
const initialSnakersState = {
    numOfSnakers:30
}


const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfcakes: state.numOfcakes - 1
        }
        default:return state
        }
}
const iceCreamReducer = (state = initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
           numofIceCreams: state.numofIceCreams - 1
        }
        default:return state
        }
}
const snakersReducer = (state = initialSnakersState, action) =>{
    switch(action.type){
       
        case BUY_SNAKERS:return{
            ...state,
           numOfSnakers: state.numOfSnakers - 1
        }
        default:return state
        }
}
const rootReducer = combinedReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    snakers:snakersReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))

const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buySnakers())
unsubscribe()