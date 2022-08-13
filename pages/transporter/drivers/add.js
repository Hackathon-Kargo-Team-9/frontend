import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
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

function AddDrivers() {
  const [driverName, setDriverName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

function onSubmit() {
  axios
    .post("https://backend-hackathon-kargo-team9.herokuapp.com/driver/", {
      name: driverName,
      phone_number: phoneNumber,
      driver_license: "12345",
      status: "Active",
    })
    .then((res) => (location.href = "/transporter/drivers"))
    .catch((err) => console.log(err));
}

  return (
    <Container>
      <Head>
        <title>Add Driver</title>
      </Head>
      <Form>
        <h1>Add Driver</h1>
        <FormRow>
          <Label htmlFor="name">Driver Name</Label>
          <Input
            type="text"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="number">Phone Number</Label>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormRow>
        <button onClick={onSubmit}>Save Driver</button>
      </Form>
    </Container>
  );
}

export default AddDrivers;