import styled from "styled-components";
import { ButtonIcon } from "../../Global/GlobalStyle";

export const PortfolioContainer = styled.div`
  overflow: initial;
  position: relative;

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.firstColor};
  }

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-pagination-bullet {
    outline: none;
  }
`;

export const PortfolioContent = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 0 1.5rem;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    column-gap: 5rem;
  }
`;

export const PortfolioImage = styled.img`
  width: 265px;
  border-radius: 0.5rem;
  justify-self: center;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const PortfolioData = styled.div`
  margin: 30px 0;
`;

export const PortfolioButton = styled.div`
  display: flex;

  :hover ${ButtonIcon} {
    transform: translateX(0.25rem);
  }
`;

export const PortfolioTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_5};
`;

export const PortfolioDesc = styled.p`
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const ArrowNext = styled.div`
  right: -0.5rem;
  
  ::after {
    content: '';
  }
  
  @media screen and (min-width: 1024px) {
    right: -3.5rem;
  }
`;

export const ArrowPrev = styled.div`
  left: -0.5rem;

  ::after {
    content: '';
  }

  @media screen and (min-width: 1024px) {
    left: -3.5rem;
  }
`;

export const SwiperPortfolioIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.firstColor};
  cursor: pointer;
  
  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;