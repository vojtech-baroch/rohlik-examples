import React from 'react';

const styles = {
	button: {
		fontSize: "14px", borderRadius: "24px", padding: "8px 24px", fontWeight: "600", marginTop: "12px", cursor: "pointer"
	}
}

export default class ButtonSimple extends React.Component {
	render() {
		const { style, count, productId, toggle } = this.props;
		return (
			<button onClick={this.props.onClick} style={styles.button}>{ toggle && count ? 'Odebrat z košíku' : 'Do košíku'}</button>
		)
	}
}