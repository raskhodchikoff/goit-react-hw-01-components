import styled from 'styled-components';

export const StatisticTitle = styled.h2`
  text-align: center;
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.greyFontStatistics};
`;

export const StatisticList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100% / 5);
  padding: ${p => p.theme.space[2]}px;

  background-color: ${p => {
    switch (p.children[0].props.children) {
      case '.docx':
        return `${p.theme.colors.docxStatistics}`;
      case '.pdf':
        return `${p.theme.colors.pdfStatistics}`;
      case '.mp3':
        return `${p.theme.colors.mp3Statistics}`;
      case '.psd':
        return `${p.theme.colors.psdStatistics}`;
      default:
        return `${p.theme.colors.mainColorStatistics}`;
    }
  }};
`;

export const StatisticSpan = styled.span`
  color: ${p => p.theme.colors.whiteFontStatistics};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
