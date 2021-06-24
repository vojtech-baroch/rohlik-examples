import React from 'react';

const styles = {
	saleText: {
		fontSize: "10px",
	}
};

export default class SaleText extends React.Component {
	render() {
		const { saleText } = this.props;
		return (
			<div style={styles.saleText}>{saleText}</div>
		);
	}
}