import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding-top: 2rem;
`;

export const FooterBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.firstColorSecond};
  padding: 2rem 0 3rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 0 3.5rem;
  }
`;

export const FooterSubContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  row-gap: 3.5rem;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export const FooterTitle = styled.h1`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.h1FontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_25};
`;

export const FooterSubTitle = styled.span`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.smallFontSize};
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 2rem;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  
  :hover {
    color: ${({ theme }) => theme.colors.firstColorLighter};
  }
`;

export const FooterSocials = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const FooterSocial = styled.a`
  font-size: 1.25rem;
  margin-right: ${({ theme }) => theme.marginBottom.mb_1_5};
  color: #fff;
  
  :hover {
    color: ${({ theme }) => theme.colors.firstColorLighter};
  }
`;

export const FooterCopy = styled.p`
  font-size: ${({ theme }) => theme.typography.smallerFontSize};
  text-align: center;
  color: ${({ theme }) => theme.colors.textColorLight};
  margin-top: ${({ theme }) => theme.marginBottom.mb_3};

  span {
    color: #fff;
  }
  
  @media screen and (min-width: 768px) {
    margin-top: 4.5rem;
  }
`;