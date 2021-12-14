import React from "react";
import LocationList from "../locations/LocationList";

export default function Locations() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Locations Page</h2>
        <LocationList />
      </main>
    );
  }