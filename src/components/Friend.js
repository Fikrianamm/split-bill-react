import { Button } from "./Button";

export function Friend({ friend, onSelect, selected }) {
  const isSelected = selected?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          Kamu berhutang {friend.name} {Math.abs(friend.balance)}K
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} berhutang padamu {Math.abs(friend.balance)}K
        </p>
      ) : (
        <p>Kamu dan {friend.name} imbang </p>
      )}
      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </Button>
    </li>
  );
}
