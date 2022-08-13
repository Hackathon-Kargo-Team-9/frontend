import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
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

function EditTruck() {
  const [plateNumber, setPlateNumber] = useState("");
  const [plateType, setPlateType] = useState("");
  const [truckType, setTruckType] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();
  const query = router.query;

  function fetchDetail() {
    axios
      .get(
        `https://backend-hackathon-kargo-team9.herokuapp.com/truck/${query.id}/`
      )
      .then((res) => {
        const data = res.data;
        setPlateNumber(data.plate_number);
        setPlateType(data.plate_type);
        setTruckType(data.truck_type);
        setProductionYear(data.production_year);
        setStatus(data.status);
      });
  }

  function submitEdit() {
    axios
      .put(
        `https://backend-hackathon-kargo-team9.herokuapp.com/truck/${query.id}/`,
        {
          plate_number: plateNumber,
          plate_type: plateType,
          truck_type: truckType,
          production_year: parseInt(productionYear),
          status: status,
        }
      )
      .then((res) => (location.href = "/transporter/trucks/"))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (query.id) {
      fetchDetail();
    }
  }, [query]);

  return (
    <Container>
      <Form>
        <h1>Edit Truck</h1>
        <FormRow>
          <Label htmlFor="license">License Number</Label>
          <Input
            type="text"
            value={plateNumber}
            onInput={(e) => setPlateNumber(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">License Type</Label>
          <Input
            type="text"
            value={plateType}
            onInput={(e) => setPlateType(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">Truck Type</Label>
          <Input
            type="text"
            value={truckType}
            onInput={(e) => setTruckType(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">Production Year</Label>
          <Input
            type="number"
            value={productionYear}
            onInput={(e) => setProductionYear(e.target.value)}
          />
        </FormRow>
        <button onClick={() => submitEdit()}>Edit</button>
      </Form>
    </Container>
  );
}

export default EditTruck;
