import React from 'react';

const styles = {
	button: {
		fontSize: "14px", borderRadius: "50%", fontWeight: "600", margin: "12px 10px", cursor: "pointer", height: "24px", width: "24px", textAlign: "center",
	}
}

export default class AmountCounter extends React.Component {
	render() {
		const { style, count, productId } = this.props;
		return (
			<>
				<button onClick={this.props.handleMinus} style={styles.button}>-</button>
				<span>{count} ks</span>
				<button onClick={this.props.handlePlus} style={styles.button}>+</button>
			</>
		)
	}
}