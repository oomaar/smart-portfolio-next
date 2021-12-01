import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

// Favorite Color
// Purple 250 - Green 142 - Blue 230 - Pink 340 - Red 0
// const hueColor = '190';
const hueColor = '240';

export const theme = {
  HeaderHeight: '3rem',
  typography: {
    bodyFont: `'Poppins', sans-serif`,
    bigFontSize: '2rem',
    h1FontSize: '1.5rem',
    h2FontSize: '1.25rem',
    h3FontSize: '1.12rem',
    normalFontSize: '0.938rem',
    smallFontSize: '0.813rem',
    smallerFontSize: '0.75rem',
    fontWeight: {
      fontMedium: '500',
      fontSemiBold: '600'
    }
  },
  marginBottom: {
    mb_0_25: '0.25rem',
    mb_0_5: '0.5rem',
    mb_0_75: '0.75rem',
    mb_1: '1rem',
    mb_1_5: '1.5rem',
    mb_2: '2rem',
    mb_2_5: '2.5rem',
    mb_3: '3rem',
  },
  zIndex: {
    zToolTip: '10',
    zFixed: '100',
    zHeader: '200',
    zModel: '1000'
  },
};

export const lightTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 69%, 61%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 15%)`,
    textColor: `hsl(${hueColor}, 8%, 45%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 70%, 96%)`,
    bodyColor: `hsl(${hueColor}, 60%, 99%)`,
    containerColor: '#eee',
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
    copyColor: `#a30908`
  },
};

export const darkTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 30%, 8%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 29%, 16%)`,
    bodyColor: `hsl(${hueColor}, 28%, 13%)`,
    containerColor: `hsl(${hueColor}, 29%, 16%)`,
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
    copyColor: `#318ce7`
  },
};

// ==================== BUTTONS ====================
export const Button = styled.a`
  display: ${({ flex }) => flex ? "inline-flex" : "inline-block"};
  align-items: ${({ flex }) => flex && "center"};
  background-color: ${({ theme, link, white }) => link ? "transparent" : white ? '#fff' : theme.colors.firstColor};
  color: ${({ theme, link, white }) => link || white ? theme.colors.firstColor : '#eee'};
  padding: ${({ small, link }) => small ? "0.75rem 1rem" : link ? "0rem" : "1rem 1rem 0.7rem"};
  border-radius: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  cursor: pointer;

  :hover {
     background-color: ${({ theme, link, white }) => link ? 'transparent' : white ? "#d5d5d5" : theme.colors.firstColorAlt};
  }
`;

export const ButtonSpan = styled.span`
  padding-bottom: 7px;
`;

export const ButtonIcon = styled.div`
  font-size: 1.25rem;
  margin-left: ${({ theme }) => theme.marginBottom.mb_1_5};
  transition: 0.3s;
`;

// ==================== REUSALE-CLASSES ====================
export const Section = styled.section`
  padding: 2rem 0 4rem;
  
  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1FontSize};
  text-align: center;
  
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.bigFontSize};
  }
`;

export const SectionSubtitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_3};
  text-align: center;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
  
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.normalFontSize};
  }
`;

// ==================== LAYOUT ====================
export const Container = styled.div`
  max-width: 768px;
  margin: 0 ${({ theme }) => theme.marginBottom.mb_1_5} 0 ${({ theme }) => theme.marginBottom.mb_1_5};
    
  @media screen and (max-width: 350px) {
    margin: 0 ${({ theme }) => theme.marginBottom.mb_1} 0 ${({ theme }) => theme.marginBottom.mb_1};
  }

  @media screen and (min-width: 768px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const GlobalStyle = createGlobalStyle`  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0 0 ${({ theme }) => theme.HeaderHeight} 0;
    font-family: ${({ theme }) => theme.typography.bodyFont};
    background-color: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};

    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: ${({ theme }) => theme.typography.fontWeight.fontSemiBold};
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  img {
    max-width: 100%;
  }

  // ==================== SCROLL-BAR  ====================
  ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: ${({ theme }) => theme.colors.scrollBarColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollThumbColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.textColorLight};
  }
`;
