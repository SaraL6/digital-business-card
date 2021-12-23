import ReactDOM from "react-dom";
import profileImg from "../images/49786058_10217681277893986_3401107756147539968_n.jpg"


export default function Info() {
    return (
        <div class="info">
            <img src={profileImg} alt="" class="info--img" />
            <h1 className="info--name">Sara Lachgar</h1>
            <h4 class="info--job">Full Stack Developer</h4>
            <a href="https://github.com/SaraL6" target="_blank" rel="noopener noreferrer" className="info--website">github.com/SaraL6</a>
            <div className="info--btns">
                <button className="email-btn"><i class="fas fa-envelope"></i> <a className="email-link" href="mailto:lachgarsara0@gmail.com">Email</a></button>
                <button className="linkedin-btn"><i class="fab fa-linkedin"></i> <a className="linkedin-link"  href="https://www.linkedin.com/in/sara-lachgar/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
            </div>

        </div>

    )
}
ReactDOM.render(<Info />, document.getElementById("root"));