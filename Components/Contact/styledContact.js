import styled from "styled-components";

export const ContactContainer = styled.div`
  display: grid;
  row-gap: 3rem;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContactInformarion = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_2};
`;

export const ContactIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.firstColor};
  margin-right: ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const ContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
`;

export const ContactSubtitle = styled.span`
  font-size: ${({ theme }) => theme.typography.smallerFontSize};
  color: ${({ theme }) => theme.colors.textColorLight};
`;

export const ContactForm = styled.form`
  display: grid;
  gap: 1.5rem;
  
  @media screen and (min-width: 1024px) {
    width: 460px;
  }
`;

export const ContactInputs = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContactInputBox = styled.div`
  background-color: ${({ theme }) => theme.colors.inputColor};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;
`;

export const ContactLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.smallerFontSize};
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const ContactInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  border: 0;
  outline: 0;
  padding: 0.25rem 0.5rem 0.5rem 0;
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  border: 0;
  outline: 0;
  padding: 0.25rem 0.5rem 0.5rem 0;
`;

export const SubmitForm = styled.button`
  background-color: ${({ theme }) => theme.colors.firstColor};
  color: #eee;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  cursor: pointer;
  border: 0;
  outline: 0;
  margin: 20px 0;
  display: ${({ flex }) => flex && "inline-flex"};
  align-items: ${({ flex }) => flex && "center"};
  
  :hover {
     background-color: ${({ theme }) => theme.colors.firstColorAlt};
  }
`;