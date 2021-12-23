import ReactDOM from "react-dom";


export default function Footer(){
    return (
        <footer>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-github-square"></i>
        </footer>

    )
}
ReactDOM.render(<Footer/>,document.getElementById("root"));