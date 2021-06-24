import React from 'react';

export default class Image extends React.Component {
	render() {
		const { image } = this.props;
		return (
			<img src={image} />
		)
	}
}