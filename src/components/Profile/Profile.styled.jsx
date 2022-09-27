import styled from 'styled-components';

export const User = styled.div`
  padding: ${p => p.theme.space[4]}px;
  text-align: center;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.blackFontProfile};
`;

export const UserInfo = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.greyFontProfile};

  &:not(:last-child) {
    margin-top: ${p => p.theme.space[2]}px;
  }
`;

export const UserStatList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  background: ${p => p.theme.colors.lowCardColorProfile};
  border-top: ${p =>
    `${p.theme.borders.normal} ${p.theme.colors.greyFontProfile}`};
`;

export const UserStatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100% / 3);
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[1]}px;

  &:not(:last-child) {
    border-right: ${p =>
      `${p.theme.borders.normal} ${p.theme.colors.greyFontProfile}`};
  }
`;

export const SpanName = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.greyFontProfile};
`;

export const SpanData = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.blackFontProfile};
`;
