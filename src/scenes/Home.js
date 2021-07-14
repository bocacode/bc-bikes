import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../App'

function Home(){
    const { isLoggedIn, user } = useContext(AuthContext)
    useEffect(() => {
        console.log({ user })
    }, [user])
    return (
        <>
            <h1>Hello {isLoggedIn ? user.displayName || 'friend' : 'Guest'}</h1>
            {isLoggedIn &&
                <img src={user.photoURL} alt={user.displayName} />}
        </>
    )
}

export default Home
