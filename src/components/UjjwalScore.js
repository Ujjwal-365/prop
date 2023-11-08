import { red } from "@mui/material/colors";
import React, { useState } from "react";

export default function UjjwalScore({ ujjwalScore, updateUjjwalScore }) {
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        
        margin:"auto",

      }}
    >
      <button onClick={() => updateUjjwalScore(ujjwalScore - 1)}>Decrement</button>

      <p>
        Ujjwal's Score <span style={{ color: "red" }}> {ujjwalScore} </span>
      </p>

      <button onClick={() => updateUjjwalScore(ujjwalScore + 1)}>Increment</button>
    </div>
  );
}
