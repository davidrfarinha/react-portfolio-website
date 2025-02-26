import { contactPageIcons } from "../assets/svg";

export default function Contacts() {
    return (
        <div className="contacts">
            <h2 className="page-title">Get in touch</h2>
            <ul className="contacts-list">
                <li>
                    <div className="contacts-svg">
                        {contactPageIcons.email}
                    </div>
                    <a
                        href="mailto:davidrfarinha@gmail.com"
                    >davidrfarinha@gmail.com</a>
                </li>
                <li>
                    <div className="contacts-svg">
                        {contactPageIcons.linkedIn}
                    </div>
                    <a
                        href="https://www.linkedin.com/in/davidrfarinha/"
                        target="_blank"
                    >https://www.linkedin.com/in/davidrfarinha/</a>
                </li>
                <li>
                    <div className="contacts-svg">
                        {contactPageIcons.gitHub}
                    </div>
                    <a
                        href="https://www.linkedin.com/in/davidrfarinha/"
                        target="_blank"
                    >https://github.com/davidrfarinha</a>
                </li>


            </ul>
        </div>
    );
}