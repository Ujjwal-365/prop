import React, { useState } from "react";

export default function SparshScore({ sparshScore, updateSparshScore }) {
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        marginLeft:400
      }}
    >
      <button onClick={() => updateSparshScore(sparshScore - 1)}>Decrement</button>

      <p>
        Sparsh's Score <span style={{ color: "red" }}> {sparshScore} </span>
      </p>

      <button onClick={() => updateSparshScore(sparshScore + 1)}>Increment</button>
    </div>
  );
}
