import user from 'db/user';
import data from 'db/data';
import friends from 'db/friends';
import transactions from 'db/transactions';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { Box } from './Box';

export const App = () => {
  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={3}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
