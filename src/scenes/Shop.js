import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Shop(){
    const { category } = useParams()
    return (
        <section>
            <h1>Shop</h1>
            <Link to="/shop/road">Road</Link>
            &nbsp;|&nbsp;
            <Link to="/shop/bmx">BMX</Link>
            &nbsp;|&nbsp;
            <Link to="/shop/hybrid">Hybrid</Link>
            &nbsp;|&nbsp;
            <Link to="/shop/electric">Electric</Link>
            {category
                ? <h2>{category.toUpperCase()}</h2>
                : <p>Choose a category</p>
            }
        </section>
    )
}

export default Shop
