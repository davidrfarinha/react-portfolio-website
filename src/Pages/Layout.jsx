import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { burgerIcon } from "../assets/svg";
export default function Layout() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const handleBurgerMenu = () => setBurgerMenu(prev => !prev);


    return (
        <div id="outer-container">
            <Menu
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                right
                isOpen={burgerMenu}
                customBurgerIcon={burgerIcon}
                onOpen={handleBurgerMenu}
                onClose={handleBurgerMenu}
            >
                <Link to="/" onClick={handleBurgerMenu}>Home Page</Link>
                <Link to="/about" onClick={handleBurgerMenu}>about me</Link>
                <Link to="/projects" onClick={handleBurgerMenu}>my projects</Link>
                <Link to="/contacts" onClick={handleBurgerMenu}>Contacts</Link>
            </Menu>
            <main id="page-wrap">
                <h2 className="gradient-text small-david-farinha">David Farinha</h2>
                <Outlet />
            </main>
        </div>
    );
}