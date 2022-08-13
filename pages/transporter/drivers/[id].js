import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

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

function DetailDrivers() {
  const [driverName, setDriverName] = useState("Jake");
  const [phoneNumber, setPhoneNumber] = useState("+62819182");
  const [createdAt, setCreatedAt] = useState("2 August 2020");
  const [status, setStatus] = useState("Active");

  return (
    <Container>
      <Head>
        <title>Truck Detail</title>
      </Head>
      <Form>
        <h1>Detail Driver</h1>
        <FormRow>
          <Label htmlFor="name">Driver Name</Label>
          <Input
            type="text"
            value={driverName}
            disabled
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="number">Phone Number</Label>
          <Input
            type="text"
            value={phoneNumber}
            disabled
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="createdAt">Created At</Label>
          <Input
            type="text"
            value={createdAt}
            disabled
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="status">Status</Label>
          <Input
            type="text"
            value={status}
            disabled
          />
        </FormRow>
      </Form>
    </Container>
  );
}

export default DetailDrivers;