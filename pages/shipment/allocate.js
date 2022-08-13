import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
`;

function AllocateShipment() {

  const [truck, setTruck] = useState("");
  const [driver, setDriver] = useState("");

  const handleCancel = {}
  const handleAllocate = {}

  return (
    <Container>
      <label>Truck</label>
      <input 
        type="text"
        value={truck}
        onChange={(e) => setTruck(e.target.value)}
      />
      <label>Driver</label>
      <input 
        type="text"
        value={driver}
        onChange={(e) => setDriver(e.target.value)}
      />

  <button onClick={handleAllocate}>
    Allocate
  </button>
  <button onClick={handleCancel}>
    Cancel
  </button>

    </Container>
  );
}

export default AllocateShipment;
