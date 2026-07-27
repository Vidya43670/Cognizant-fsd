import React from "react";
import "./App.css";

function App() {

  // Office Object
  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "Chennai"
  };

  // List of Office Objects
  const officeList = [
    {
      name: "DBS Business Center",
      rent: 55000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700"
    },
    {
      name: "Corporate Hub",
      rent: 45000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=700"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <h2>Featured Office</h2>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700"
        alt="Office"
        width="400"
      />

      <h3>Name : {office.name}</h3>

      <h3
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        Rent : Rs. {office.rent}
      </h3>

      <h3>Address : {office.address}</h3>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div key={index} className="card">

          <img
            src={item.image}
            alt={item.name}
            width="300"
          />

          <h3>{item.name}</h3>

          <h4
            style={{
              color: item.rent < 60000 ? "red" : "green"
            }}
          >
            Rent : Rs. {item.rent}
          </h4>

          <h4>Address : {item.address}</h4>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;