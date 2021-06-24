import React from 'react';

const styles = {
	inCart: {
		marginTop: "10px", position: "absolute", top: "5px", right: "5px", left: "5px", background: "#6da305", fontSize: "12px", padding: "10px", fontWeight: "600",
	},
}

export default class InCart extends React.Component {
	render() {
		const { name, count, price, style } = this.props;
		return (
			<div className="inCart" style={styles.inCart}>
				V košíku máte {name} {count} ks za {price * count} Kč
			</div>
		)
	}
}