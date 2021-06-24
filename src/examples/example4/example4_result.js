import React from 'react';
import Image from '../../components/image';
import InCart from '../../components/inCart';
import Name from '../../components/name';
import Price from '../../components/price';
import AmountCounter from '../../components/amountCounter';
import ButtonSimple from '../../components/buttonSimple';
import SaleText from '../../components/saleText';

const styles = {
	product: {
		width: '200px', padding: "10px", border: "1px solid #eee", textAlign: "center", position: "relative", float: "left", margin: "10px",
	},
}

class Example4Result extends React.Component {

	state = {
		products: [
			{
				id: 1,
				name: "Rohlik.cz Kešu natural",
				image: "https://images.rohlik.cz/images/grocery/products/1343513/1343513-1539090152.jpg?width=200",
				price: 62.92,
				count: 0,
				sale: {
					salePrice: 72.53,
					saleText: "Akce do 30. 7."
				},

			},
			{
				id: 2,
				name: "Rohlik.cz Lískové ořechy",
				image: "https://images.rohlik.cz/images/grocery/products/1343517/1343517-1539090301.jpg?width=200",
				price: 52.43,
				count: 0,
				sale: {
					salePrice: 45.24,
					saleText: "Akce do 30. 8."
				},
			},
			{
				id: 3,
				name: "Rohlik.cz Mandle",
				image: "https://images.rohlik.cz/images/grocery/products/1343525/1343525-1539090239.jpg?width=200",
				price: 48.90,
				count: 0,
				sale: null,
			},
		]
	}

	handlePlus = (productId) => event => {
        event && event.preventDefault();
        let nextState = [];
        this.state.products.forEach(product => {
            if (product.id === productId) {
                return nextState.push({...product, count: product.count + 1});
            }
            return nextState.push({...product});
        });
        this.setState({ products: nextState });
	}

	handleMinus = (productId) => event => {
		event && event.preventDefault();
		let nextState = [];
        this.state.products.forEach(product => {
            if (product.id === productId) {
                return nextState.push({...product, count: product.count - 1});
            }
            return nextState.push({...product});
        });
        this.setState({ products: nextState });
	}

	render() {
		return (
			<>
			{this.state.products.map(product => {
				const { id, name, image, price, count, sale } = product;
				const isSaleActive = sale && sale.salePrice && (sale.salePrice < price);
				const currentPrice = isSaleActive ? sale.salePrice : price;
				return (
					<div className="product" style={styles.product} key={product.id}>
						{!!product.count &&
							<InCart name={product.name} count={product.count} price={currentPrice} style={styles.inCart} />
						}
						<Image image={product.image} />
						<Name name={product.name} style={styles.name} />
						{isSaleActive &&
							<SaleText saleText={sale.saleText} />
						}
						<Price price={currentPrice} isSaleActive={isSaleActive} style={styles.price} />
						{
							!!product.count
								? <AmountCounter handlePlus={this.handlePlus(product.id)} handleMinus={this.handleMinus(product.id)} count={product.count} />
								: <ButtonSimple onClick={this.handlePlus(product.id)} />
						}
					</div>
				)
			})}
			</>
		)
	}
}

export default Example4Result;

/* Zadání:
	1. Přidat cenu v akci, pokud je výhodnější.
	2. Přidat komponentu SaleText ve které bude informace o slevě - zobrazovat pouze pokud je sleva výhodnější.
*/
