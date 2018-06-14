import React, { Component } from 'react'
import Item from './Item'

class Crypto extends Component {

	getCallback (data) {
		const list = []
		list.push({ name: 'BTC', price: data.BTC.USD })
		list.push({ name: 'ETH', price: data.ETH.USD })
		list.push({ name: 'LTC', price: data.LTC.USD })
		return list
	}

	pushCallback (prices) {
		const list = []
		list.push({ name: 'BTC', price: prices.prices.BTC.USD })
		list.push({ name: 'ETH', price: prices.prices.ETH.USD })
		list.push({ name: 'LTC', price: prices.prices.LTC.USD })
		return list
	}

	render() {
		const { ...passThroughProps } = this.props
		const config = {
			postUrl: '/prices/new',
			localStorageItemState: 'crypto-state',
			pusherChannel: 'coin-prices',
			getUrl: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD',
			itemPageHeader: "Wanna mess with crypto? Here's some hot ones!"
		}

		return (
			<Item 
				config={config} 
				getCallback={this.getCallback}
				pushCallback={this.pushCallback}
				{...passThroughProps} 
			/>
		)
	}

}

export default Crypto
