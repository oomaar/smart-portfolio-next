import styled from "styled-components";

export const HomeContaier = styled.div`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    row-gap: 5rem;
  }
`;

export const HomeContent = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
  
  @media screen and (max-width: 350px) {
    grid-template-columns: 0.25fr 3fr;
  }

  @media screen and (min-width: 568px) {
    grid-template-columns: max-content 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    padding-top: 5.5rem;
    column-gap: 2rem;
  }
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  @media screen and (min-width: 1024px) {
    transform: translateX(-6rem);
  } 
`;

export const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.firstColor};
  
  :hover {
    color: ${({ theme }) => theme.colors.firstColorAlt};
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;
  
  @media screen and (min-width: 568px) {
    grid-column: initial;
  }
`;

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.bigFontSize};
`;

export const HomeSubtitle = styled.h3`
  font-size:  ${({ theme }) => theme.typography.h3FontSize};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom:  ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const HomeDescription = styled.p`
  margin-bottom:  ${({ theme }) => theme.marginBottom.mb_2};
`;

export const HomeScroll = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const ScrollButton = styled.a`
  color: ${({ theme }) => theme.colors.firstColor};
  transition: 0.3s;
  display: ${({ flex }) => flex && "inline-flex"};
  align-items: ${({ flex }) => flex && "center"};
  
  :hover {
    transform: translateY(0.25rem);
  }
  
  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
`;

export const ScrollMouse = styled.div`
  font-size: 2rem;
  margin: 0 0.5rem 0 0;
`;

export const ScrollButtonText = styled.span`
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  margin-right: ${({ theme }) => theme.marginBottom.mb_0_25};
`;
