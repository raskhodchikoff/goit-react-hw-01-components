import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  User,
  UserName,
  Img,
  UserInfo,
  UserStatList,
  UserStatItem,
  SpanName,
  SpanData,
} from 'components/Profile/Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      width="250px"
      bg="mainCardColorProfile"
      border="normal"
      borderRadius="sm"
      boxShadow="shadow"
      borderColor="greyFontProfile"
    >
      <User>
        <Img src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </User>
      <UserStatList>
        <UserStatItem>
          <SpanName>Followers</SpanName>
          <SpanData>{followers}</SpanData>
        </UserStatItem>
        <UserStatItem>
          <SpanName>Views</SpanName>
          <SpanData>{views}</SpanData>
        </UserStatItem>
        <UserStatItem>
          <SpanName>Likes</SpanName>
          <SpanData>{likes}</SpanData>
        </UserStatItem>
      </UserStatList>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
