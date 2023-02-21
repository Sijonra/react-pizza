import './Normalize.scss'
import './App.css';
import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import CartEmpty from "./components/Cart/CartEmpty";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        {/*<Cart />*/}
        {/*<CartEmpty />*/}
    </div>
  );
}

export default App;
