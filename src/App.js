import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting={'¡Bienvenido!'} />
        </div>
    )
}

export default App;