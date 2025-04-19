import clsx from 'clsx';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return friends.map((friend) => {
    return (
      <div className={css.container} key={friend.id}>
        <img
          className={css.friendAvatar}
          src={friend.avatar}
          alt="Avatar"
          width="100"
        />
        <p className={css.friendName}>{friend.name}</p>
        <p
          className={clsx(
            css.friendStatus,
            friend.isOnline === true && css.friendOnline,
          )}
        >
          {friend.isOnline === true ? 'Online' : 'Offline'}
        </p>
      </div>
    );
  });
}
