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

function EditShipment() {

  const status = [
    {
      label: "Ongoing to Origin",
      value: "Ongoing to Origin"
    },
    {
      label: "At Origin",
      value: "At Origin"
    },
    {
      label: "Ongoing to Destination",
      value: "Ongoing to Destination"
    },
    {
      label: "At Destination",
      value: "At Destination"
    },
    {
      label: "Completed",
      value: "Completed"
    }
  ]
  const [selectedStatus, setSelectedStatus] = useState("")

  const handleCancel = {}
  const handleUpdate = {}

  return (
    <Container>
      <Form>
        <h1>Update Shipment's Status</h1>
        <FormRow>
          <Label htmlFor="status">Status</Label>
          <Select
            onChange={(i) => setSelectedStatus(i.value)}
            placeholder="Set current status"
            options={status}
          />
        </FormRow>
        <ButtonRow>
          <button style={{backgroundColor:"gray", width:"100%"}} onClick={handleCancel}>Cancel</button>
          <button style={{width:"100%"}} onClick={handleUpdate}>Update</button>
        </ButtonRow>
      </Form>
    </Container>
  );
}

export default EditShipment;
