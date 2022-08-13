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

  const [selectedTruck, setSelectedTruck] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");

  const handleCancel = () => {
    window.history.back()
  }
  const handleAllocate = () => {
    if (selectedTruck == "" && selectedDriver == "") {
      alert("Failed")
    } else {
      alert("Success")
    }
  }

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
          <button style={{backgroundColor:"gray", width:"100%"}} onClick={handleCancel}>Cancel</button>
          <button style={{width:"100%"}} onClick={handleAllocate}>Allocate</button>
        </ButtonRow>
      </Form>
    </Container>
  );
}

export default AllocateShipment;
