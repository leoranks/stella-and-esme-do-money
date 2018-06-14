import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Pusher from 'pusher-js'
import Crypto from './components/Crypto'
import Stock from './components/Stock'
import Forex from './components/Forex'
import Home from './components/Home'
import logo from './img/logo_64_border.png'
//import './App.css'

class App extends Component {

    render() {
        const pusher = new Pusher('KEY', {
            cluster: 'us2',
            encrypted: true
        })

        return (
            <div className="app">
                <header className="app--header">
                    <img src={logo} alt="logo" />  
                </header>
                <BrowserRouter>
                    <div className="app--main">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/crypto" render={(routeProps) => (<Crypto {...routeProps} pusher={pusher} /> )} />
                        <Route exact path="/stock" render={(routeProps) => (<Stock {...routeProps} pusher={pusher} /> )} />
                        <Route exact path="/forex" render={(routeProps) => (<Forex {...routeProps} pusher={pusher} /> )} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
    
}

export default App
