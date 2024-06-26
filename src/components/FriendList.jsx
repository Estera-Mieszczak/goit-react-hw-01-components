import PropTypes from "prop-types";
import clsx from "clsx";
import css from '../css/FriendList.module.css'

export const FriendList = ({ friends }) => {
    const friendListItem = friends.map(friend => 
     <li className={css.item} key={friend.id}>
            <span className={clsx(css.status, {
            [css.isOnline]: friend.isOnline,
        })}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
     </li>
    )
    return (
        <ul className="friend-list">
            {friendListItem}
        </ul>
    )
}
FriendList.propTypes = {
  friends: PropTypes.array
};