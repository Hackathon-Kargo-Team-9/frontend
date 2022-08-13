import Head from "next/head";
import { useRouter } from "next/router";
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

function TruckDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [licenseNumber, setLicenseNumber] = useState("B 1234 ABC");
  const [licenseType, setLicenseType] = useState("Blue");
  const [truckType, setTruckType] = useState("Tronton");
  const [productionYear, setProductionYear] = useState("2012");

  return (
    <Container>
      <Head>
        <title>Truck Detail</title>
      </Head>
      <Form>
        <h1>Truck Detail</h1>
        <FormRow>
          <Label htmlFor="license">License Number</Label>
          <Input type="text" value={licenseNumber} disabled />
        </FormRow>
        <FormRow>
          <Label htmlFor="license">License Type</Label>
          <Input type="text" value={licenseType} disabled />
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
