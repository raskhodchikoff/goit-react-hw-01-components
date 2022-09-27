import styled from 'styled-components';

export const Table = styled.table`
  width: 720px;
  text-align: center;
  box-shadow: ${p => p.theme.shadows.shadow};
  border-collapse: collapse;

  th {
    padding: ${p => p.theme.space[2]}px 0;
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[1]}px;
    background-color: ${p => p.theme.colors.lineHeaderTransaction};
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.greyFontTransaction};
    color: ${p => p.theme.colors.whiteFontTransaction};
  }

  td {
    width: calc(100% / 3);
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: ${p => p.theme.colors.greyFontTransaction};
    padding: ${p => p.theme.space[2]}px 0;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.greyFontTransaction};
  }

  tr:nth-child(odd) {
    background-color: ${p => p.theme.colors.lineWhiteTransaction};
  }

  tr:nth-child(even) {
    background-color: ${p => p.theme.colors.lineGreyTransaction};
  }
`;
