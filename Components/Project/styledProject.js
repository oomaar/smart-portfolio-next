import styled from "styled-components";

export const ProjectBackground = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.firstColor};
  padding-top: 3rem;

  @media screen and (min-width: 768px) {
    background: none;
  }
`;

export const ProjectData = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 0.8rem;
  } 
`;

export const ProjectContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: 768px) {
    background-color: ${({ theme }) => theme.colors.firstColorSecond};
    border-radius: 1rem;
    padding: 3rem 2.5rem 0;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
  }
`;

export const ProjectTitle = styled.h2`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.h2FontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const ProjectSubtitle = styled.p`
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1_5};
  color: #fff;
`;

export const ProjectImage = styled.img`
  width: 232px;
  justify-self: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 350px) {
    width: 200px;
  }
`;