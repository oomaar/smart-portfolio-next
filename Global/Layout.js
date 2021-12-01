import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkModeState } from "../utils/recoil/recoil";
import { darkTheme, GlobalStyle, lightTheme, theme } from "./GlobalStyle";

export const Layout = ({ children }) => {
    const darkMode = useRecoilValue(darkModeState);

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeProvider>
    );
};