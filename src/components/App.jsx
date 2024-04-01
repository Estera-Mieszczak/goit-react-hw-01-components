import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './Transactions';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
// import './Profile.module.css';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
  </>
  );
};
