import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    column-gap: 5rem;
  }
`;

export const AboutImage = styled.img`
  width: 200px;
  border-radius: 0.5rem;
  justify-self: center;
  align-self: center;
  
  @media screen and (min-width: 568px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const AboutDescription = styled.p`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1_5};
    
  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.marginBottom.mb_2_5};
    text-align: initial;
  }
`;

export const AboutBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    justify-content: initial;
  }
`;