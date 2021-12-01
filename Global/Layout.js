import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "./GlobalStyle";

export const Layout = ({ children }) => {
    const [show, setShow] = useState(false);
    const [toggleTheme, setToggleTheme] = useState("light");

    const showScrollUpLink = () => {
        window.scrollY > 100 ? setShow(true) : setShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", showScrollUpLink);

        return () => window.removeEventListener("scroll", showScrollUpLink);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={toggleTheme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeProvider>
    );
};