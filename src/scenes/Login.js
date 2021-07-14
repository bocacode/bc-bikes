import React, { useContext } from 'react'
import { AuthContext } from '../App'

function Login() {
    const { isLoggedIn, setIsLoggedIn, setUser } = useContext(AuthContext)
    const clickHandler = () => {
        if(isLoggedIn) {
            setUser(null)
            setIsLoggedIn(false)
        } else {
            setUser({
                name: 'Sara',
                role: 'Admin'
            })
            setIsLoggedIn(true)
        }
    }
  return (
    <>
        <h1>{isLoggedIn ? 'Log out' : 'Login'}</h1>
        <button onClick={() => clickHandler()}>
            {isLoggedIn ? 'Log out' : 'Login'}
        </button>
    </>
  )
}

export default Login