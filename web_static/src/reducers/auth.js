export const login_reducer = (state, action) => {

    switch (action.type) {
        
        case "LOGIN":
            localStorage.setItem("access_token", JSON.stringify(action.payload.access_token))
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            return {
                ...state,
                isAuthenticated: true,                
                access_token: action.payload.access_token,
                user: action.payload.user,                                
            }

        case "UPDATE_USER":
            return {
                ...state,
                user: action.user
            }

                   
        case "LOGOUT":
            localStorage.clear()
            window.location.assign('/')
            return {
                ...state,
                isAuthenticated: false,
                access_token: null,
                user: null
            }
    
        default:
            return state
    }
}
