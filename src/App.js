import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="*" element={<h1>¡Esta página no existe!</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;