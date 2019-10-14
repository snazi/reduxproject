const INITIAL_STATE = {
    currentUser: 'Angelo'
}

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'SET_NEW_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer