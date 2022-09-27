import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendsList } from 'components/FriendList/FriendList.styled';
import { Box } from 'components/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box as="section" mt={3}>
      <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </FriendsList>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
