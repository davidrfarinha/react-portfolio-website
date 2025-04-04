import { aboutPageIcons } from "../assets/svg";
export default function About() {
    const svgIconsDivs = aboutPageIcons.map((item, index) => {
        return (
            <div
                key={index}
                className="about-icons gradient-border"
            >
                <span className="tech-name">{item.name}</span>
                {item.svg}
            </div>
        );
    })

    return (
        <div className="about">
            <h2 className="page-title">About me</h2>
            <p>Hi! I&apos;m David. I&apos;m a Portuguese Mathematics and Natural Sciences School teacher currently based in Hildesheim - Germany.</p>
            <p>Despite my background as a teacher, I have always been interested in IT and programming. Therefore, when I moved to Germany to start a new life with my wife, I decided to change careers and pursue a fresh start in the IT field.</p>
            <p>I started then learning web development and programming by myself, which I deeply fell in love with. So far, I&apos;ve learnt HTML, CSS, JavaScript and the JavaScript library React. For each piece of content I&apos;ve learnt, I&apos;ve developed projects on my own, which are available on this site for you to check out. Currently, my goal is to enter a career as a front-end application developer.</p>
            <p>In my spare time I really enjoy playing and walking in the forest with my son and my wife. I also enjoy sports such as running, swimming and mountain biking. One of my passions used to be board games, which I don&apos;t have that much time for these days (I&apos;m sure I&apos;ll be able to enjoy this hobby again when my little one grows up, if he shares the same interest as me). In addition, I also love solving coding challenges in platforms like Codewars.com.</p>
            <h3>My skills</h3>
            <div className="icons-container">
                {svgIconsDivs}
            </div>
            <h3>Languages</h3>
            <ul>
                <li>Portuguese - Mother Language (native speaker)</li>
                <li>English - Fluent (reading, writing, speaking, and listening)</li>
                <li>German - B1 (currently studying for B2 certification)</li>
            </ul>
        </div>
    );
}