import styled from "styled-components";

export const QualificationTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_2};
`;

export const QualificationButton = styled.div`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${({ active, theme }) => active && theme.colors.firstColor};
  margin: 0 ${({ theme }) => theme.marginBottom.mb_1};

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
`;

export const QualificationIcon = styled.div`
  font-size: 1.8rem;
  margin: 0 ${({ theme }) => theme.marginBottom.mb_0_25} 0 ${({ theme }) => theme.marginBottom.mb_0_25};
`;

export const QualificationSections = styled.div`
  display: grid;
  justify-content: center;

  @media screen and (min-width: 568px) {
    grid-template-columns: 0.6fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.5fr;
  }
`;

export const QualificationContent = styled.div`
  display: ${({ dataTarget }) => dataTarget ? 'block' : 'none'};
`;

export const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;

  @media screen and (max-width: 350px) {
    gap: 0.5rem;
  }
`;

export const QualificationTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  margin-right: ${({ theme }) => theme.typography.fontWeight.fontMedium};
`;

export const QualificationSubtitle = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1};
`;

export const QualificationCalendar = styled.div`
  font-size: ${({ theme }) => theme.typography.smallerFontSize};
  color: ${({ theme }) => theme.colors.textColorLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100px;
`;

export const QualificationRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${({ theme }) => theme.colors.firstColor};
  border-radius: 50%;
`;

export const QualificationLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.firstColor};
  transform: translate(6px, -7px);
`;