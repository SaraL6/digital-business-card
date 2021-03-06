import ReactDOM from "react-dom";
import Info from "./components/Info";
import Main from "./components/Main";
import Footer from "./components/Footer";


export default function App() {
    return (
        <div className="container">
            <div className="sub-container">
             <Info />
            <Main />
            <Footer />
            </div>
           
        </div>

    )
}
ReactDOM.render(<App />, document.getElementById("root"));