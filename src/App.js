import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer inicio={'Harry Potter Shop'} />
        </div>
    )
}

export default App;