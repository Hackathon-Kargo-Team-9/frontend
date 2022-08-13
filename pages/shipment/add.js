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

function AddShipment() {

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleCancel = {}
  const handleSave = {}

  return (
    <Container>
      <Form>
        <h1>Add Shipment</h1>
        <FormRow>
          <Label htmlFor="origin">Origin</Label>
          <Input
            type="text"
            value={origin}
            placeholder="Search district here"
            onChange={(e) => setOrigin(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="destination">Destination</Label>
          <Input
            type="text"
            value={destination}
            placeholder="Search district here"
            onChange={(e) => setDestination(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="date">Loading Date</Label>
          <Input
            type="date"
            value={date}
            placeholder="13/08/2022"
            onChange={(e) => setDate(e.target.value)}
          />
        </FormRow>
        <ButtonRow>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </ButtonRow>
      </Form>
    </Container>
  );
}

export default AddShipment;
