import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Example1Result from './examples/example1/example1_result';
import Example2Result from './examples/example2/example2_result';
import Example3Result from './examples/example3/example3_result';
import Example4Result from './examples/example4/example4_result';
import Example5Result from './examples/example5/example5_result';
import Example6 from './examples/example6/example6';
import { Provider } from "react-redux";
import { loadProducts } from './actions';
import configureStore from "./configureStore";


const store = configureStore();
class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<Router>
					<ul>
						<li><Link to="/example1">Example 1</Link></li>
						<li><Link to="/example2">Example 2</Link></li>
						<li><Link to="/example3">Example 3</Link></li>
						<li><Link to="/example4">Example 4</Link></li>
						<li><Link to="/example5">Example 5</Link></li>
            <li><Link to="/example6">Example 6</Link></li>
					</ul>
					<Route path="/example1" component={Example1Result} />
					<Route path="/example2" component={Example2Result} />
					<Route path="/example3" component={Example3Result} />
					<Route path="/example4" component={Example4Result} />
					<Route path="/example5" component={Example5Result} />
          <Route path="/example6" component={Example6} />
				</Router>
		</Provider>
		)
	}
}

export default App;

/* Zadání:
    1. Vytvořit výpis produktů ze statu s použitím komponent z předchozího zadání.
	2. Funkce handleInCart bude už jen přidávat do košíku konkrétní produkty (podle id).
	3. V komponentě InCart vypočítat cenu za x kusů.
*/
