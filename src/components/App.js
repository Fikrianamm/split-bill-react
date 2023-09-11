import { useState } from "react";
import { Button } from "./Button";
import { FriendList } from "./FriendList";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clara",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Adit",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleAddFriend() {
    setAddFriend((show) => !show);
  }

  function onAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    handleAddFriend();
  }

  function handleSelected(friend) {
    setSelected((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriend(false);
  }

  function onSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selected={selected}
          onSelect={handleSelected}
        />
        {addFriend && <FormAddFriend onAddFriends={onAddFriends} />}
        <Button onClick={handleAddFriend}>
          {addFriend ? "Tutup" : "Tambah teman"}
        </Button>
      </div>
      {selected && (
        <FormSplitBill friend={selected} onSplitBill={onSplitBill} />
      )}
    </div>
  );
}
