import React, { useContext, useState } from 'react'
import firebase from "firebase/app"
import "firebase/auth"
import { AuthContext } from '../App'

const firebaseConfig = {
    apiKey: "AIzaSyAnq-vbEw35Ktfs-NKjYqNnqF91TAD-yQc",
    authDomain: "bc-bikes-ta.firebaseapp.com",
    projectId: "bc-bikes-ta",
    storageBucket: "bc-bikes-ta.appspot.com",
    messagingSenderId: "807463870071",
    appId: "1:807463870071:web:cd9de58309451f95267072"
}

firebase.initializeApp(firebaseConfig)

function Login() {
    const { isLoggedIn, setIsLoggedIn, setUser } = useContext(AuthContext)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const clickHandler = () => {
        if (isLoggedIn) {
            setUser(null)
            setIsLoggedIn(false)
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    setUser(res.user)
                    setIsLoggedIn(true)
                })
                .catch(err => alert(err.message))
        }
    }
    const formValHandler = (e) => {
        e.preventDefault()
        if(e.target.name === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }
    const loginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setUser(res.user)
                setIsLoggedIn(true)
            })
            .catch(err => alert(err.message))
    }
    return (
        <>
            <h1>{isLoggedIn ? 'Log out' : 'Login'}</h1>
            <form>
                <label>Email: 
                    <input name="email" type="email" value={email} onChange={formValHandler} />
                </label>
                <label>Password: 
                    <input name="password" type="password" value={password} onChange={formValHandler} />
                </label>
            </form>
            <button onClick={() => clickHandler()}>
                {isLoggedIn ? 'Log out' : 'Login'}
            </button>
            <br/>
            {!isLoggedIn && 
                <button onClick={() => loginWithGoogle()}>Login with Google</button>}
        </>
    )
}

export default Login