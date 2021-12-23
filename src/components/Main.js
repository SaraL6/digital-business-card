import ReactDOM from "react-dom";

export default function Main() {
    return (
        <main>
             <div class="about">
            <h1 className="about--title">About</h1>
            <p className="about--text">A web developer with a strong interest in projects that require both conceptual and analytical thinking.
                Fully-committed to designing and developing innovative web-based applications.
                Always eager to collaborate and learn from others.
            </p>
        </div> 
        <div className="interests">
        <h1 className="interests--title">Interests</h1>
            <p className="interests--text">Gamer, mother of three cats, tv show binger, food lover.
            </p>
        </div>
        </main>
      


    )
}
ReactDOM.render(<Main />, document.getElementById("root"));