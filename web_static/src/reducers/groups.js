export const groups_reducer = (state, action) => {

    switch (action.type) {

        case 'SET_USERS':
            return {
                ...state,
                list_users: action.list_users
            }

        case 'SET_RELOAD':
            console.log(action)
            return {
                ...state,
                reload: action.value
            }

        case 'SET_MORNING_THURSDAY':
            return {
                ...state,
                morning_meetings: {
                    ...state.morning_meetings,
                    thursday: action.payload
                }
            }

        case 'SET_MORNING_FRIDAY':
            return {
                ...state,
                morning_meetings: {
                    ...state.morning_meetings,
                    friday: action.payload
                }
            }

        case 'SET_INVITATIONS':
            return {
                ...state,
                my_invitations: action.payload
            }
        
        case 'SET_INVITATIONS_OWNER':
            return {
                ...state,
                my_invitations_sends: action.payload
            }

        case 'SET_MORNING_SATURDAY':
            return {
                ...state,
                morning_meetings: {
                    ...state.morning_meetings,
                    saturday: action.payload
                }
            }

        case 'SET_AFTERNOON_THURSDAY':
            return {
                ...state,
                evening_meetings: {
                    ...state.evening_meetings,
                    thursday: action.payload
                }
            }

        case 'SET_AFTERNOON_FRIDAY':
            return {
                ...state,
                evening_meetings: {
                    ...state.evening_meetings,
                    friday: action.payload
                }
            }

        case 'SET_AFTERNOON_SATURDAY':
            return {
                ...state,
                evening_meetings: {
                    ...state.evening_meetings,
                    saturday: action.payload
                }
            }

        case 'SET_MEETINGS':
            console.log()
            return {
                ...state,
                meetings: action.payload
            }


        default:
            return state
    }

}