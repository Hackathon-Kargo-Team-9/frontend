import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--light);
  color: var(--darkgrey);
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
`;

const Label = styled.label`
  width: 150px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

function AllocateShipment() {

  const [trucks, setTrucks] = useState({
    data: [
      {
        label: "Tronton",
        value: "Tronton",
      },
      {
        label: "Container",
        value: "Container",
      }
    ]
  })
  const [drivers, setDrivers] = useState({
    data: [
      {
        label: "Damar",
        value: "Damar",
      },
      {
        label: "Irfan",
        value: "Irfan",
      }
    ]
  })

  const [selectedTruck, setSelectedTruck] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleCancel = {}
  const handleAllocate = {}

  return (
    <Container>
      <Form>
        <h1>Allocate Shipment</h1>
        <FormRow>
          <Label htmlFor="truck">Truck</Label>
          <Select
            onChange={(i) => setSelectedTruck(i.value)}
            placeholder="Search truck here"
            options={trucks.data}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="driver">Driver</Label>
          <Select
            onChange={(i) => setSelectedDriver(i.value)}
            placeholder="Search driver here"
            options={drivers.data}
          />
        </FormRow>
        <ButtonRow>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleAllocate}>Allocated</button>
        </ButtonRow>
      </Form>
    </Container>
  );
}

export default AllocateShipment;
