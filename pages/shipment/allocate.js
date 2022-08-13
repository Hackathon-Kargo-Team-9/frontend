import React, { useState } from "react";
import styled from "styled-components";

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

  const [truck, setTruck] = useState("");
  const [driver, setDriver] = useState("");

  const handleCancel = {}
  const handleAllocate = {}

  return (
    <Container>
      <Form>
        <h1>Edit Truck</h1>
        <FormRow>
          <Label htmlFor="truck">Truck</Label>
          <Input
            type="text"
            value={truck}
            onChange={(e) => setTruck(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="driver">Driver</Label>
          <Input
            type="text"
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
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
