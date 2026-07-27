import React from "react";

// Array of Indian Players
export const IndianPlayers = [
  "Sachin1",
  "Sehwag2",
  "Gambhir3",
  "Dravid4",
  "Laxman5",
  "Dhoni6",
  "Yuvraj7",
  "Raina8",
  "Kohli9",
  "Rohit10",
  "Jadeja11"
];

// Display Odd Team Players
export function OddPlayers(players) {
  const [first, , third, , fifth, , seventh, , ninth, , eleventh] = players;

  return (
    <ul>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
      <li>Seventh : {seventh}</li>
      <li>Ninth : {ninth}</li>
      <li>Eleventh : {eleventh}</li>
    </ul>
  );
}

// Display Even Team Players
export function EvenPlayers(players) {
  const [, second, , fourth, , sixth, , eighth, , tenth] = players;

  return (
    <ul>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
      <li>Eighth : {eighth}</li>
      <li>Tenth : {tenth}</li>
    </ul>
  );
}