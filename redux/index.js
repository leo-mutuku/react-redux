const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return{
        
            type:BUY_CAKE,
            info:'First redux action'
        
    }
}

const initialState = {
   numOfcakes:10
}

const reducer = (state, action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
           numberOfCakes: state.numberOfCakes - 1
        }
        default:return state
        }
   
    

}