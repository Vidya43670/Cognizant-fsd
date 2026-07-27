import React from "react";

function ListofIndianPlayers() {
  const T20players = [
    "Virat",
    "Rohit",
    "Surya",
    "Hardik",
    "Pant"
  ];

  const RanjiTrophyPlayers = [
    "Pujara",
    "Rahane",
    "Saha",
    "Iyer",
    "Ashwin"
  ];

  // Merge two arrays using ES6 spread operator
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofIndianPlayers;