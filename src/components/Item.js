import React, { Component } from 'react'
import { ItemPrice } from './ItemPrice'
import axios from 'axios'

class Item extends Component {

    state = {
		items: []
	}

    sendPricePusher (data) {
        axios.post(this.props.config.postUrl, {
            prices: data
        })
            //.then(console.log)
            .catch(console.error)
    }

    saveStateToLocalStorage = () => {
		localStorage.setItem(this.props.config.localStorageItemState, JSON.stringify(this.state))
	}

	restoreStateFromLocalStorage = () => {
		const state = JSON.parse(localStorage.getItem(this.props.config.localStorageItemState))
		this.setState(state)
	}

    componentDidMount () {
        if (!navigator.onLine) {
            return this.restoreStateFromLocalStorage()
        }

        this.prices = this.props.pusher.subscribe(this.props.config.pusherChannel)

        axios.get(this.props.config.getUrl)
			.then(response => {
				this.setState({ items: this.props.getCallback(response.data) })
				this.saveStateToLocalStorage()
			})
            .catch(console.error)
			
		this.itemSubscription = setInterval(() => {
			axios.get(this.props.config.getUrl)
				.then(({data}) => { 
					this.sendPricePusher(data)
				})
				.catch(console.error)
        }, 30000)  

		this.prices.bind('prices', prices => {
			this.setState({ items: this.props.pushCallback(prices) })
			this.saveStateToLocalStorage()
		}, this)
    }

    componentWillUnmount() {
		clearInterval(this.itemSubscription)
	}

    render() {
		const itemPageHeader = this.props.config.itemPageHeader
		const listItems = this.state.items.map((item) => 
			<ItemPrice key={item.name} item={item.name} price={item.price}/> 
		)
		return (
			<section className="app--section item">
				<div className="container">
                  	<h1>{itemPageHeader}</h1>
              	</div>
              	<div className="container">

					<h3>Current Price</h3>
					<div>
						{listItems}
					</div>

				</div>
			</section>			
		)
    }
}

export default Item
