import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const HeaderTag = styled.header`
  box-shadow: ${({ shadow }) => shadow && '0 -1px 4px rgba(0, 0, 0, 0.15)'};
  background-color: ${({ theme }) => theme.colors.bodyColor};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.zHeader};

  @media screen and (min-width: 768px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export const Nav = styled.nav`
  max-width: 968px;
  height: ${({ theme }) => theme.HeaderHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768) {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 1rem;
  }
`;

export const Logo = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    background-color: ${({ theme }) => theme.colors.bodyColor};
    border-radius: 1.5rem 1.5rem 0 0;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    padding: 2rem 1.5rem 4rem;
    position: fixed;
    bottom: ${({ toggleShow }) => toggleShow ? '0' : '-100%'};
    left: 0;
    width: 100%;
    transition: 0.3s;
  }

  @media screen and (max-width: 350px) {
    padding: 2rem 0.25rem 4rem;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 350px) {
    column-gap: 0;
  }
  
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 2rem;
  }
`;

export const NavClose = styled.div`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.firstColor};
  transition: 0.3s ease;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;


export const ListItem = styled.li`
  .active-link {
      color: ${({ theme }) => theme.colors.firstColor};
    }
`;

export const NavLink = styled(ScrollLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.normalFontSize};
  }
`;

export const NavIcon = styled.div`
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavBtns = styled.div`
  display: flex;
`;

export const ChangeTheme = styled.div`
  display: flex;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.titleColor};
  margin-right: ${({ theme }) => theme.marginBottom.mb_1};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
  
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-left: ${({ theme }) => theme.marginBottom.mb_1};
  }
`;


export const NavToggle = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  margin-left: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;