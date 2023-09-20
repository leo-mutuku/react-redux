const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

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

const initialState = {
   numOfcakes:10,
   numofIceCreams:20
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfcakes: state.numOfcakes - 1
        }
        case BUY_ICECREAM:return{
            ...state,
           numofIceCreams: state.numofIceCreams - 1
        }
        default:return state
        }
}

const store = createStore(reducer)
console.log(`intial state`, store.getState())
const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()