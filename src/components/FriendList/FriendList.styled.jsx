import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
`;

export const FriendsCard = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[5]}px;

  background-color: ${p => p.theme.colors.mainCardColorFriendList};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.greyFontProfile}`};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadows.shadow};

  span {
    width: 20px;
    height: 20px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => {
      return p.isOnline
        ? `${p.theme.colors.isOnlineGreenFriendList}`
        : `${p.theme.colors.isOnlineRedFriendList}`;
    }};
  }

  p,
  img {
    margin-left: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: ${p => p.theme.colors.blackFontFriendList};
  }
`;
