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

function AddShipment() {

  const [origins, setOrigins] = useState({
    data: [
      {
        label: "Jakarta",
        value: "Jakarta",
      },
      {
        label: "Bandung",
        value: "Bandung",
      }
    ]
  })
  const [destinations, setDestinations] = useState({
    data: [
      {
        label: "Jakarta",
        value: "Jakarta",
      },
      {
        label: "Bandung",
        value: "Bandung",
      }
    ]
  })

  const [selectedOrigin, setSelectedOrigin] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleCancel = {}
  const handleSave = {}

  return (
    <Container>
      <Form>
        <h1>Add Shipment</h1>
        <FormRow>
          <Label htmlFor="origin">Origin</Label>
          <Select
            onChange={(i) => setSelectedOrigin(i.value)}
            placeholder="Search district here"
            options={origins.data}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="destination">Destination</Label>
          <Select
            onChange={(i) => setSelectedDestination(i.value)}
            placeholder="Search district here"
            options={destinations.data}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="date">Loading Date</Label>
          <Input
            type="date"
            value={selectedDate}
            placeholder="13/08/2022"
            onChange={(e) => setSelectedDate(e.target.value)}
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
