import React, { Component } from 'react'
import Item from './Item'

class Stock extends Component {

	getCallback (data) {
		const list = []
		list.push({ name: 'AAPL', price: data.AAPL.quote.latestPrice })
		list.push({ name: 'AMZN', price: data.AMZN.quote.latestPrice })
		list.push({ name: 'GOOGL', price: data.GOOGL.quote.latestPrice })
		return list
	}

	pushCallback (prices) {
		const list = []
		list.push({ name: 'AAPL', price: prices.prices.AAPL.quote.latestPrice })
		list.push({ name: 'AMZN', price: prices.prices.AMZN.quote.latestPrice })
		list.push({ name: 'GOOGL', price: prices.prices.GOOGL.quote.latestPrice })
		return list
	}

	render() {
		const { ...passThroughProps } = this.props;
		const config = {
			postUrl: '/stocks/new',
			localStorageItemState: 'stock-state',
			pusherChannel: 'stock-prices',
			getUrl: 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,amzn,googl&types=quote',
			itemPageHeader: "How about some sizzling stocks? Check these out!"
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

export default Stock
