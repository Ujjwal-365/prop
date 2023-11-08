import React, { useState } from "react";
import YatinScore from "./YatinScore";
import CustomAppBar from "./CustomAppBar";
import UjjwalScore from "./UjjwalScore";
import SparshScore from "./SparshScore";
import ArshScore from "./ArshScore";

export default function Home() {
  const [yatinScore, setYatinScore] = useState(0);
  const [ujjwalScore, setUjjwalScore] = useState(0);
  const [sparshScore, setSparshScore] = useState(0);
  const [arshScore, setArshScore] = useState(0);  

  const handleYatinScore = (value) => {
    if (value < 0) return;
    setYatinScore(value);
  };
  const handleUjjwalScore = (value) => {
    if (value < 0) return;
    setUjjwalScore(value);
  };
  const handleSparshScore = (value) => {
    if (value < 0) return;
    setSparshScore(value);
  };
  const handleArshScore = (value) => {
    if (value < 0) return;
    setArshScore(value);
  };
  
  

  return (
    <div>
      <CustomAppBar team1={yatinScore+ujjwalScore} team2={sparshScore+arshScore} />
      <YatinScore yatinScore={yatinScore} updateYatinScore={handleYatinScore} />
      <UjjwalScore ujjwalScore={ujjwalScore} updateUjjwalScore={handleUjjwalScore} />
      <SparshScore sparshScore={sparshScore} updateSparshScore={handleSparshScore} />
      <ArshScore arshScore={arshScore} updateArshScore={handleArshScore} />
    </div>
  );
}

// Team A
// Yatin and Ujjwal

// Team B
// Arsh and Sparsh
