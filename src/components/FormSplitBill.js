import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userPay, setUserPay] = useState("");
  const [who, setWho] = useState("user");
  const friendPay = userPay && bill - userPay;

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userPay) return;
    onSplitBill(who === "user" ? friendPay : -userPay);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💰 Nilai tagihan</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label> Kamu membayar </label>
      <input
        type="text"
        value={userPay}
        onChange={(e) =>
          setUserPay(
            Number(e.target.value) > bill ? userPay : Number(e.target.value)
          )
        }
        disabled={who === "friend"}
      />

      <label> {friend.name}'s membayar </label>
      <input
        type="text"
        value={friendPay}
        onChange={(e) => setUserPay(() => bill - Number(e.target.value))}
        disabled={who === "user"}
      />

      <label>🤑 Siapa yang membayar tagihan?</label>
      <select value={who} onChange={(e) => setWho(e.target.value)}>
        <option value="user">Kamu</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
