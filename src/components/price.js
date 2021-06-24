import React from 'react';

const styles = {
	price: {
		fontSize: "16px", fontWeight: "600",
	},
}

export default class Price extends React.Component {
	render() {
		const { price } = this.props;
		return (
			<div className="price" style={styles.price}>{price} Kč</div>
		)
	}
}