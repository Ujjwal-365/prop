import React, { useState } from "react";

export default function ArshScore({ arshScore, updateArshScore }) {
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        marginLeft:400
      }}
    >
      <button onClick={() => updateArshScore(arshScore - 1)}>Decrement</button>

      <p>
        Arsh's Score <span style={{ color: "red" }}> {arshScore} </span>
      </p>

      <button onClick={() => updateArshScore(arshScore + 1)}>Increment</button>
    </div>
  );
}
