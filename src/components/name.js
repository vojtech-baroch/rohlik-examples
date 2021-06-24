import React from 'react';

const styles = {
	name: {
		fontSize: "14px", fontWeight: "normal",
	},
}

export default class Name extends React.Component {
	render() {
		const { name, style } = this.props;
		return (
			<h2 className="name" style={styles.name}>{name}</h2>
		)
	}
}