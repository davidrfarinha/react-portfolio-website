import { Link } from "react-router-dom";
export default function HomePage() {
    return (
        <div className="home-page">
            <div className="top">
                <h1 className="gradient-text big-david-farinha">David</h1>
            </div>

            <div className="center greeting bebas-font">
                <p className="bebas-font">Hi! This is my portfolio website. Here you can check:</p>
            </div>
            <nav className="center main-navbar bebas-font">
                <ul>
                    <li><Link to="/about">about me,</Link></li>
                    <li><Link to="/projects">my projects</Link></li>
                    <li><Link to="/contacts">and my contacts.</Link></li>
                </ul>
            </nav>
            <div className="bottom gradient-text big-david-farinha">
                <h1 className="gradient-text big-david-farinha">Farinha</h1>
            </div>

        </div>
    );

}