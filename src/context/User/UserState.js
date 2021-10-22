import { useReducer } from 'react'

import UserContext from './UserContext'
import UserReducer from './UserReducer'

import { GET_USERS, GET_PROFILE } from '../types'

const UserState = ({ children }) => {

    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)


    // Getting Users
    const getUsers = async () => {
        try {
            const url = 'https://reqres.in/api/users'
            const resp = await fetch(url)
            const users = await resp.json()

            dispatch({ type: GET_USERS, payload: users.data })

        } catch (error) {
            console.error(error)
        }
    }


    // Getting User by ID
    const getProfile = async (id) => {
        try {
            const url = 'https://reqres.in/api/users/'
            const resp = await fetch(`${ url }${ id }`)
            const user = await resp.json()

            dispatch({ type: GET_PROFILE, payload: user.data })

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <UserContext.Provider
        value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile,
        }}
        >
            { children }
        </UserContext.Provider>
    )
}

export default UserState