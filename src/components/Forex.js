import React, { Component } from 'react'
import Item from './Item'

class Forex extends Component {

	getCallback (data) {
		const list = []
		for (var curr in data) {
			list.push({ name: data[curr].symbol.substring(0,3), price: data[curr].price })
		}
		return list
	}

	pushCallback (prices) {
		const list = []
		for (var curr in prices.prices) {
			list.push({ name: prices.prices[curr].symbol.substring(0,3), price: prices.prices[curr].price })
		}
		return list
	}

	render() {
		const { ...passThroughProps } = this.props;
		const config = {
			postUrl: '/forex/new',
			localStorageItemState: 'forex-state',
			pusherChannel: 'forex-prices',
			getUrl: 'https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,GBPUSD,CNHUSD&api_key=API_KEY',
			itemPageHeader: "About to hop on a jet? Time to change some funds!"
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

export default Forex
