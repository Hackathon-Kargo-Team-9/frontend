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

function AddTrucks() {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [truckType, setTruckType] = useState("");
  const [productionYear, setProductionYear] = useState("");

  return (
    <Container>
      <Form>
        <h1>Add Truck</h1>
        <FormRow>
          <Label htmlFor="license">License Number</Label>
          <Input
            type="text"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">License Type</Label>
          <Input
            type="text"
            value={licenseType}
            onChange={(e) => setLicenseType(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">Truck Type</Label>
          <Input
            type="text"
            value={truckType}
            onChange={(e) => setTruckType(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">Production Year</Label>
          <Input
            type="text"
            value={productionYear}
            onChange={(e) => setProductionYear(e.target.value)}
          />
        </FormRow>
        <button>submit</button>
      </Form>
    </Container>
  );
}

export default AddTrucks;
