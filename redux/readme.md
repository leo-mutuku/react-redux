
# Three core concepts
- a store that holds the state of application
-
An actin that describes the changes in the state of the appplication
- A reducer which actually carries out the state transition depending on the action.


# Store # reducers # Actions

# Redux pattern
[x] First
Maintain our application state in a sinngle object
[x] second
To update state you need to emit an action
[x] Third
To specify how the state is transformed by actions you write pure reducers

# Pure reducers - (previous, action) =>newState




# REDUX STORE
- One store for entire application
Responsibilities -

[x] Holds application state
[x] Allows access to state via getState()
[x] Allows state to be updated via dispatch(action)
[x] Registers listeners via subscribe(listener)
[x] Handles unregistering of listener via the function returned by subscriber(listener)



#Reducers
+ case: FETCH_USERS_REQUEST
    - loading:true

+ case: FETCH_USERS_SUCCESS
    - loading: false
    - users:data(from API)
+ case: FETCH_USERS_FAILURE
    - loading: false
    - error:error(from API)
