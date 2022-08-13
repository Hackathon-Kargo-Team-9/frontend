import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
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

const CustomSelect = styled(Select)`
  width: 100%;
`;

function AddTrucks() {
  const [plateNumber, setPlateNumber] = useState("");
  const [plateType, setPlateType] = useState("");
  const [truckType, setTruckType] = useState("");
  const [productionYear, setProductionYear] = useState("");

  function onSubmit() {
    axios
      .post("https://backend-hackathon-kargo-team9.herokuapp.com/truck/", {
        plate_number: plateNumber,
        plate_type: plateType,
        truck_type: truckType,
        production_year: parseInt(productionYear),
        status: "Active",
      })
      .then((res) => (location.href = "/transporter/trucks"))
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Form>
        <h1>Add Truck</h1>
        <FormRow>
          <Label htmlFor="license">License Number</Label>
          <Input
            type="text"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">License Type</Label>
          <CustomSelect
            options={[
              {
                label: "Black",
                value: "Black",
              },
              {
                label: "Yellow",
                value: "Yellow",
              },
            ]}
            onChange={(item) => setPlateType(item.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">Truck Type</Label>
          <CustomSelect
            options={[
              {
                label: "Tronton",
                value: "Tronton",
              },
              {
                label: "Container",
                value: "Container",
              },
              {
                label: "CDE",
                value: "CDE",
              },
              {
                label: "Pickup",
                value: "Pickup",
              },
            ]}
            onChange={(item) => setTruckType(item.value)}
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
        <button onClick={() => onSubmit()}>submit</button>
      </Form>
    </Container>
  );
}

export default AddTrucks;
