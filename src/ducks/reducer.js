const initialState = {
    username: '',
    id: 0,
    pic: ''
}

const LOGIN_USER = 'LOGIN_USER'

export function loginUser (id, username, pic) {
    return {
        type: LOGIN_USER,
        payload: {id, username, pic}
    }
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
    case LOGIN_USER:
        return {...state, 
            id: action.payload.id,
            username: action.payload.username,
            pic: action.payload.pic}
    default: return state
    }   
}