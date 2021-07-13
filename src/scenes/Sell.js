import React from 'react'
import { useHistory } from 'react-router-dom'

function Sell(){
    const history = useHistory()
    const handleSubmit = () => {
        // do all the stuff
        // take them back to "/shop"
        history.push("/shop")
    }
    return (
        <section>
            <h1>Sell</h1>
            <p>We had some form to sell an item.</p>
            <button onClick={() => handleSubmit()}>
                Submit</button>
        </section>
    )
}

export default Sell
