import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="app--section">
            <div className="container">
                <h1>Invest with Stella and Esme!</h1>
            </div>
            <div className="container">
                <Link to="/crypto" className="app--links">Cryptocurrencies</Link>
                <Link to="/stock" className="app--links">Hot Stock Picks</Link>
                <Link to="/forex" className="app--links">Foreign Exchange</Link>
            </div>
        </section>
    )
}
  
export default Home
