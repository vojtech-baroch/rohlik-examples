import React from 'react';
import Image from '../../components/image';
import InCart from '../../components/inCart';
import Name from '../../components/name';
import Price from '../../components/price';
import ButtonSimple from '../../components/buttonSimple';

const styles = {
	product: {
		width: '200px', padding: "10px", border: "1px solid #eee", textAlign: "center", position: "relative", float: "left", margin: "10px",
	},
	inCart: {
		marginTop: "10px", position: "absolute", top: "5px", right: "5px", left: "5px", background: "#6da305", fontSize: "12px", padding: "10px", fontWeight: "600",
	},
	name: {
		fontSize: "14px", fontWeight: "normal",
	},
	price: {
		fontSize: "16px", fontWeight: "600",
	},
	button: {
		fontSize: "14px", borderRadius: "24px", padding: "8px 24px", fontWeight: "600", marginTop: "12px", cursor: "pointer"
	}
}


class Example1Result extends React.Component {

	state = {
		product: {
			name: "Rohlik.cz Kešu natural",
			image: "https://images.rohlik.cz/images/grocery/products/1343513/1343513-1539090152.jpg?width=200",
			price: 62.92,
			count: 0
		}
	}

	handleInCart = event => {
		if (this.state.product.count) {
			return this.setState({ product: {...this.state.product, count: this.state.product.count - 1 }})
		}
		return this.setState({ product: {...this.state.product, count: this.state.product.count + 1 }})
	}

	render() {
		const { name, image, price, count } = this.state.product;
		return (
			<div className="product" style={styles.product}>
				{!!count &&
					<InCart name={name} count={count} price={price} style={styles.inCart} />
				}
				<Image image={image} />
				<Name name={name} style={styles.name} />
				<Price price={price} style={styles.price} />
				<ButtonSimple toggle count={count} onClick={this.handleInCart} style={styles.button} />
			</div>
		)
	}
}

export default Example1Result;