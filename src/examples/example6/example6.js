import React from 'react';
import Image from '../../components/image';
import InCart from '../../components/inCart';
import Name from '../../components/name';
import Price from '../../components/price';
import AmountCounter from '../../components/amountCounter';
import ButtonSimple from '../../components/buttonSimple';
import SaleText from '../../components/saleText';
import { connect } from "react-redux";
import { loadProducts } from '../../actions';

const styles = {
	product: {
		width: '200px', padding: "10px", border: "1px solid #eee", textAlign: "center", position: "relative", float: "left", margin: "10px",
  },
  category: {
    border: "1px solid #eee", float: "left", padding: "10px",
  },
  categoryTitle: {
    float: "left",
  }
}

class Example6 extends React.PureComponent {

	state = {
		categories: [
			{
				id: 123,
				name: "Drůbeží a králičí",
				images: ["https://images.rohlik.cz/images/grocery/products/1340721/1340721-1528358401.jpg?width=56", "https://images.rohlik.cz/images/grocery/products/1337021/1337021-1520956887-260.jpg?width=56", "https://images.rohlik.cz/images/grocery/products/1307145/1307145-1532681017-260.jpg?width=56"]
      },
      {
				id: 124,
				name: "Grilování",
				images: ["https://images.rohlik.cz/images/grocery/products/714767/714767-1500380674-260.jpg?width=56", "https://images.rohlik.cz/images/grocery/products/1323829/1323829-1530262106-260.jpg?width=56", "https://images.rohlik.cz/images/grocery/products/1301447/1301447-1532419882-260.jpg?width=56"]
      },
      {
				id: 125,
				name: "Hovězí a telecí",
				images: ["https://images.rohlik.cz/images/grocery/products/1286863/1286863-1530622252-260.jpg?width=56", "https://images.rohlik.cz/images/grocery/products/1319945/1319945-1530100986-260.jpg?width=56", "https://images.rohlik.cz/images/grocery/products/1338819/1338819-1535107012-260.jpg?width=56"]
			}
    ],
    products: [
			{
				id: 1,
				name: "Údlické farmářské kuře Kuřecí prsní řízek",
				image: "https://images.rohlik.cz/images/grocery/products/1340721/1340721-1528358401.jpg?width=200",
				price: 121.77,
        count: 0,
        categoryId: 123
			},
			{
				id: 2,
				name: "Beyond Meat Beyond párky 10ks",
				image: "https://images.rohlik.cz/images/grocery/products/1357019/1357019-1561019429.jpg?width=200",
				price: 649.90,
        count: 0,
        categoryId: 124
			},
			{
				id: 3,
				name: "Ecoproduct BIO Hovězí oháňka",
				image: "https://images.rohlik.cz/images/grocery/products/1341461/1341461-1533727299.jpg?width=200",
				price: 337.48,
        count: 0,
        categoryId: 125,
      },
      {
        id: 4,
        name: "Ecoproduct BIO Hovězí žebra s kostí",
        image: "https://images.rohlik.cz/images/grocery/products/1286887/1286887-1530624627.jpg?width=200",
        price: 105.39,
        count: 0,
        categoryId: 125,
      },
      {
        id: 5,
        name: "Údlické farmářské kuře Kuřecí kousky",
        image: "https://images.rohlik.cz/images/grocery/products/1340763/1340763-1528375652.jpg?width=200",
        price: 101.61,
        count: 0,
        categoryId: 123,
      },
      {
        id: 6,
        name: "Fishee's Losos špízy marinované chlazené z ekofarmy ASC",
        image: "https://images.rohlik.cz/images/grocery/products/1353915/1353915-1565340985.jpg?width=200",
        price: 172.22,
        count: 0,
        categoryId: 124,
      },
      {
        id: 7,
        name: "Ponnath Bavorské grilovací klobásky",
        image: "https://images.rohlik.cz/images/grocery/products/1321235/1321235-1487172129.jpg?width=200",
        price: 54.90,
        count: 0,
        categoryId: 124,
      },
      {
        id: 8,
        name: "Farma rodiny Němcovy Kuřecí křídla",
        image: "https://images.rohlik.cz/images/grocery/products/1307137/1307137-1532682730.jpg?width=200",
        price: 91.37,
        count: 0,
        categoryId: 123,
      },
      {
        id: 9,
        name: "Biopark BIO Hovězí burger s pepřem",
        image: "https://images.rohlik.cz/images/grocery/products/1353827/1353827-1556780749.jpg?width=200",
        price: 87.24,
        count: 0,
        categoryId: 125,
      },
    ],
    totalPrice: 0,
    currentCategory: null,
  }


  componentDidMount() {
    this.props.loadProducts();
  }

  handlePlus = (productId) => event => {
    event && event.preventDefault();
    let nextState = [];
    this.state.products.forEach(product => {
        if (product.id === productId) {
    this.setState({ totalPrice: this.state.totalPrice + product.price });
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
    this.setState({ totalPrice: this.state.totalPrice - product.price });
    return nextState.push({...product, count: product.count - 1});
        }
        return nextState.push({...product});
    });
    this.setState({ products: nextState });
}

removeProduct = (productId) => event => {
event && event.preventDefault();
let nextState = [];
    this.state.products.forEach(product => {
        if (product.id === productId) {
    this.setState({ totalPrice: this.state.totalPrice - (product.price * product.count)});
            return nextState.push({...product, count: 0 });
        }
        return nextState.push({...product});
    });
    this.setState({ products: nextState });
}

clearCart = event => {
let nextState = [];
    this.state.products.forEach(product => {
      return nextState.push({...product, count: 0 });
    });
    this.setState({ products: nextState, totalPrice: 0 });
}

filterProducts(categoryId) {
  if (!categoryId) {
    this.state.categories.map(category => (
        <div style={{clear: "both"}}>
          <h2>{category.name}</h2>
          {this.state.products.filter(p => p.categoryId === category.id).map(product => this.renderProduct(product))}
        </div>
      )
    );
  }
  else {
    return (
      this.state.categories.filter(c => c.id === categoryId).map(category => {
        return (
          <div style={{clear: "both"}}>
            <h2>{category.name}</h2>
            {this.state.products.filter(p => p.categoryId === category.id).map(product => this.renderProduct(product))}
          </div>
        )
      })
    );
  }
  return this.state.products.map(product => this.renderProduct(product));
}

filterCategory = categoryId => event => {
  event && event.preventDefault();
  this.setState({ currentCategory: categoryId });
}

renderCategories() {
  return (
    this.state.categories.map(category => (
      <div key={category.id} style={styles.category} onClick={this.filterCategory(category.id)}>
        <h3 style={styles.categoryTitle}>{category.name}</h3>
        {
          category.images.map(image => (
            <img src={image} />
          ))
        }
      </div>
    ))
  )
}

renderProduct = product => {
  const { id, name, image, price, count, sale } = product;
    const isSaleActive = sale && sale.salePrice && (sale.salePrice < price);
    const currentPrice = isSaleActive ? sale.salePrice : price;
    return (
      <div className="product" style={styles.product}>
        {!!count &&
          <InCart name={name} count={count} price={currentPrice} style={styles.inCart} />
        }
        <Image image={image} />
        <Name name={name} style={styles.name} />
        {isSaleActive &&
          <SaleText saleText={sale.saleText} />
        }
        <Price price={currentPrice} isSaleActive={isSaleActive} style={styles.price} />
        {
          !!product.count
            ? <AmountCounter handlePlus={this.handlePlus(id)} handleMinus={this.handleMinus(id)} count={count} />
            : <ButtonSimple onClick={this.handlePlus(id)} />
        }
      </div>
    )
}

render() {
  console.log('this.props.products', this.props.products);
return (
  <>
  {this.renderCategories()}
  <div style={{clear: "both"}}></div>
  {this.filterProducts(this.state.currentCategory)}
  <div className="cart">
    <h1>Košík</h1>
    <p>V košíku máte zboží za {Math.round(this.state.totalPrice)} Kč {!!this.state.totalPrice && <button onClick={this.clearCart}>Vysypat košík</button>}</p>
    {this.state.products.filter(filterProduct => filterProduct.count !== 0).map(product => {
      return (
        <div className="product" key={product.id}>
          <Name name={product.name} />
          <AmountCounter handlePlus={this.handlePlus(product.id)} handleMinus={this.handleMinus(product.id)} count={product.count} />
          <button onClick={this.removeProduct(product.id)}>x</button>
        </div>
      )
    })}
  </div>
  </>
)
}
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(null, { loadProducts })(Example6);

/* Zadání
  1. Vytvořit komponentu Category, která bude obsahovat název a fotky (bude sloužit jako navigace)
  2. Výpis produktů bude rozdělený podle kategorií - Nadpis kategorie + produkty které pod kategorii spadají.
  3. Při načtení stránky budou zobrazené všechny kategorie s produktama
  4. Po kliknutí na navigaci se uloží id kategorie do this.state.currentCategory a vyfiltrují se produkty
  */