import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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

function TruckDetail() {
  const router = useRouter();
  const query = router.query;

  const [plateNumber, setPlateNumber] = useState("");
  const [plateType, setPlateType] = useState("");
  const [truckType, setTruckType] = useState("");
  const [productionYear, setProductionYear] = useState("");

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
      });
  }

  useEffect(() => {
    if (query.id) {
      fetchDetail();
    }
  }, [query]);

  return (
    <Container>
      <Head>
        <title>Truck Detail</title>
      </Head>
      <Form>
        <h1>Truck Detail</h1>
        <FormRow>
          <Label htmlFor="license">License Number</Label>
          <Input type="text" value={plateNumber} disabled />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">License Type</Label>
          <Input type="text" value={plateType} disabled />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">Truck Type</Label>
          <Input type="text" value={truckType} disabled />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">Production Year</Label>
          <Input type="text" value={productionYear} disabled />
        </FormRow>
      </Form>
    </Container>
  );
}

export default TruckDetail;
