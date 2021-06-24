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
}

class Example2Resutl extends React.Component {

	state = {
		products: [
			{
				id: 1,
				name: "Rohlik.cz Kešu natural",
				image: "https://images.rohlik.cz/images/grocery/products/1343513/1343513-1539090152.jpg?width=200",
				price: 62.92,
				count: 0,
			},
			{
				id: 2,
				name: "Rohlik.cz Lískové ořechy",
				image: "https://images.rohlik.cz/images/grocery/products/1343517/1343517-1539090301.jpg?width=200",
				price: 52.43,
				count: 0,
			},
			{
				id: 3,
				name: "Rohlik.cz Mandle",
				image: "https://images.rohlik.cz/images/grocery/products/1343525/1343525-1539090239.jpg?width=200",
				price: 48.90,
				count: 0,
			},
		]
	}

	handleInCart = (productId) => event => {
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

	render() {
		return (
				this.state.products.map(product => {
					return (
						<div className="product" style={styles.product} key={product.id}>
							{!!product.count &&
								<InCart name={product.name} count={product.count} price={product.price} />
							}
							<Image image={product.image} />
							<Name name={product.name}  />
							<Price price={product.price} />
							<ButtonSimple onClick={this.handleInCart(product.id)} productId={product.id} />
						</div>
					)
			})
		)
	}
}

export default Example2Resutl;

/* Zadání:
    1. Vytvořit výpis produktů ze statu s použitím komponent z předchozího zadání.
	2. Funkce handleInCart bude už jen přidávat do košíku konkrétní produkty (podle id).
	3. V InCart spočítat cenu za počet kusů.
*/
