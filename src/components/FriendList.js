import { Friend } from "./Friend";

export function FriendList({ friends, onSelect, selected }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
