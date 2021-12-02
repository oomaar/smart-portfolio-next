import { useEffect, useState } from "react";
import { Container } from "../../Global/GlobalStyle";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../utils/recoil/recoil";
import {
    HeaderTag,
    Nav,
    Logo,
    NavList,
    NavClose,
    ListItem,
    NavLink,
    NavIcon,
    NavMenu,
    NavBtns,
    ChangeTheme,
    NavToggle,
} from "./styledHeader";

export const Header = ({ data, name }) => {
    const [shadow, setShadow] = useState(false);
    const [toggleShow, setToggleShow] = useState(false);

    const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    const handleDarkMode = () => setDarkMode(!darkMode);

    const showShadow = () => window.scrollY > 100 ? setShadow(true) : setShadow(false);
    const toggleHeaderOpen = () => setToggleShow(true);
    const toggleHeaderClose = () => setToggleShow(false);
    const activeLink = () => toggleHeaderClose();

    useEffect(() => {
        window.addEventListener("scroll", showShadow);
    }, []);

    const navLinks = data.map(link => {
        return (
            <ListItem key={link.id}>
                <NavLink
                    href={link.href} onClick={() => activeLink(link.href)}
                    to={link.section}
                    smooth={true}
                    duration={50}
                    spy={true}
                    exact="true"
                    offset={-50}
                    activeClass="active-link"
                >
                    <NavIcon>
                        <i className={link.icon}></i>
                    </NavIcon>
                    {link.name}
                </NavLink>
            </ListItem>
        );
    });

    return (
        <HeaderTag shadow={shadow} id="header">
            <Container>
                <Nav>
                    <Logo>{name}</Logo>

                    <NavMenu toggleShow={toggleShow}>
                        <NavList>
                            {navLinks}
                        </NavList>
                        <NavClose>
                            <i className="uil uil-times" onClick={toggleHeaderClose}></i>
                        </NavClose>
                    </NavMenu>

                    <NavBtns>
                        <ChangeTheme>
                            {darkMode ? (
                                <i className="uil uil-moon" onClick={handleDarkMode}></i>
                            ) : (
                                <i className="uil uil-sun" onClick={handleDarkMode}></i>
                            )}
                        </ChangeTheme>
                        <NavToggle>
                            <i className="uil uil-align-left" onClick={toggleHeaderOpen}></i>
                        </NavToggle>
                    </NavBtns>
                </Nav>
            </Container>
        </HeaderTag>
    );
};