import React from 'react';

const styles = {
	product: {
		width: '200px', padding: "10px", border: "1px solid #eee", textAlign: "center", position: "relative"
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

class Example1 extends React.Component {

	state = {
		product: {
			name: "Rohlik.cz Kešu natural",
			image: "https://images.rohlik.cz/images/grocery/products/1343513/1343513-1539090152.jpg?width=200",
			price: 62.92,
			count: 0
		}
	}

	handleInCart = event => {

	}

	render() {
		return (
			<div className="product" style={styles.product}>
				<div className="inCart" style={styles.inCart}>
					V košíku máte Název produktu x ks za xx Kč
				</div>
				<img src="#" />
				<h2 className="name" style={styles.name}>Název produktu</h2>
				<div className="price" style={styles.price}>xx Kč</div>
				<button onClick={this.handleInCart} style={styles.button}>Do košíku / Odebrat z košíku</button>
			</div>
		)
	}
}

export default Example1;

/* Zadání:
	1. Rozdělit na komponenty - InCart, Name, Image, Price, Button.
	2. Propsat do komponent hodnoty ze state.
	3. pomocí funkce handleInCart přidávat/odebírat produkt z košíku.
	4. Po přidání do košíku zobrazit komponentu InCart s propsaným názvem, počtem kusů a cenou.
	5. Přepínat text v komponentě Button podle toho jestli je produkt v košíku.
*/
