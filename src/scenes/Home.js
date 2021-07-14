import React, { useContext } from 'react'
import { AuthContext } from '../App'

function Home(){
    const { isLoggedIn, user } = useContext(AuthContext)
    return <h1>Hello {isLoggedIn ? user.name : 'Guest'}</h1>
}

export default Home
