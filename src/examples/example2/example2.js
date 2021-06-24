import React from 'react';

class App extends React.Component {

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
			<>
				{this.state.products.map(product => {
					return (
						<div className="product" style={{width: '200px', padding: "10px", border: "1px solid #eee", textAlign: "center", margin: "10px", float: "left"}}>
							<div className="inCart" style={{ marginTop: "10px", }}>
								V košíku máte Název produktu x ks za xx Kč
							</div>
							<img src="https://images.rohlik.cz/images/grocery/products/1343513/1343513-1539090152.jpg?width=200" />
							<h2 className="name">{product.name}</h2>
							<div className="price">{product.price}</div>
							<button onClick={this.handleInCart(product.id)}>Do košíku / Odebrat z košíku</button>
						</div>
					)
			})}
		</>
		)
	}
}

export default App;

/* Zadání:
    1. Vytvořit výpis produktů ze statu s použitím komponent z předchozího zadání.
	2. Funkce handleInCart bude už jen přidávat do košíku konkrétní produkty (podle id).
	3. V komponentě InCart vypočítat cenu za x kusů.
*/
