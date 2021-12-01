import styled from "styled-components";
import { ButtonIcon, ButtonSpan } from "../../Global/GlobalStyle";

export const ServicesContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  
  @media screen and (max-width: 350px) {
    grid-template-columns: max-content;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 218px);
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 238px);
  }
`;

export const ServicesContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  
  :hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  ${ButtonIcon} {
    margin-left: ${({ theme }) => theme.marginBottom.mb_0_5};
  }

  ${ButtonSpan} {
    font-size: ${({ theme }) => theme.typography.smallFontSize};
  }

  @media screen and (max-width: 350px) {
    padding-right: 3.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem 2.5rem;
  }
`;

export const ServicesIcon = styled.div`
  display: block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.firstColor};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1};

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServicesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover ${ButtonIcon} {
    transform: translateX(0.25rem);
  }
`;

export const ServicesTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
`;

export const ServicesModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: ${({ theme }) => theme.zIndex.zModel};
  opacity: 0;
  visibility: hidden;
  opacity: ${({ active }) => active ? '1' : '0'};
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  transition: 0.3s;

  @media screen and (max-width: 350px) {
    padding: 0 0.5rem;
  }
`;

export const ServicesModalContent = styled.div`
  position: relative;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.containerColor};
  border-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;

export const ServicesModalClose = styled.div`  
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.firstColor};
  cursor: pointer;
`;

export const ServicesModalTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1_5};
`;

export const ServicesModalServices = styled.ul`
  row-gap: 1rem;
  display: grid;
`;

export const ServicesModalService = styled.li`
  display: flex;
`;

export const ServicesModalIcon = styled.div`
  color: ${({ theme }) => theme.colors.firstColor};
  margin-right: ${({ theme }) => theme.marginBottom.mb_0_5};
`;
