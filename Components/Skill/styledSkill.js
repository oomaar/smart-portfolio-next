import styled from "styled-components";

export const SkillContainer = styled.div`
  display: grid;
  row-gap: 0;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillContent = styled.div`
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_2_5};
`;

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_2_5};
  cursor: pointer;
`;

export const SkillArrow = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.firstColor};
  margin: 0 ${({ theme }) => theme.marginBottom.mb_0_75} 0 ${({ theme }) => theme.marginBottom.mb_0_75};
  transition: 0.3s;
  transform: ${({ toggleShow, skill }) => toggleShow === skill && 'rotate(-180deg)'};
`;

export const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.firstColor};
  margin: 0 ${({ theme }) => theme.marginBottom.mb_0_75} 0 ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const SkillTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  
  @media screen and (max-width: 350px) {
    font-size: ${({ theme }) => theme.typography.normalFontSize};
  }
`;

export const SkillSubTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  color: ${({ theme }) => theme.colors.textColorLight};
`;

export const SkillList = styled.div`
  display: grid;
  row-gap: 1.5rem;
  padding-left: 2.7rem;
`;

export const SkillData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_5};
`;

export const SkillName = styled.h3`
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
`;

export const SkillBar = styled.span`
  height: 5px;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.firstColorLighter};
`;

export const SkillPercentage = styled.div`
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.firstColor};
  width: ${({ width }) => `${width}%`};
  height: 5px;
`;