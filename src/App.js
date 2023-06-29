import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route exact path="*" element={<h1>¡Esta página no existe!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;