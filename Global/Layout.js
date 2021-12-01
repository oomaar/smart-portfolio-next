import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { Background } from "../Components";
import { darkModeState } from "../utils/recoil/recoil";
import { darkTheme, GlobalStyle, lightTheme, theme } from "./GlobalStyle";

export const Layout = ({ children }) => {
    const darkMode = useRecoilValue(darkModeState);

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
                {!darkMode && <Background />}
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeProvider>
    );
};