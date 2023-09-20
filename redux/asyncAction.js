const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

//initial state
const initialState = {
    loading:false,
    users:[],
    error:""
}

// actions declarations
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// action function call
const fetchUsersRequest = () =>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = () =>{
    return{
    type: FETCH_USERS_SUCCESS,
    payload:users
    }
}

const fetchUsersFailure = () =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    
    }
}

// reducer
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
              
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
       
    }
}


// api call with 
const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.org/users')
        .then(response =>{
           
            const users = response.data
             console.log(dispatch(fetchUsersSuccess(users)))
            dispatch(fetchUsersSuccess(users))
            //response.data array of users
            
        })
        .catch(error =>{
            dispatch(fetchUsersFailure(error))
            // error.message 
        })

    }
}

// store creation
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// logger
store.subscribe(()=>{
    console.log(store.getState())
})

// action emitter
store.dispatch(fetchUsers())
