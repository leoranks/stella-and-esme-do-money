import React from 'react'

export const ItemPrice = ({item, price}) =>
	<div className="app--links">
		<span className="app--bold">{item.toUpperCase()}</span>
		<span>&nbsp;</span>
		<span>{price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
	</div>
