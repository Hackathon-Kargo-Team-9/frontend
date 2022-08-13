import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
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

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

function AllocateShipment() {

  const [trucks, setTrucks] = useState([])
  const [drivers, setDrivers] = useState([])

  const [selectedTruck, setSelectedTruck] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");

  const handleCancel = () => {
    window.history.back()
  }
  const handleAllocate = () => {
    if (selectedTruck == "" && selectedDriver == "") {
      alert("Failed")
    } else {
      alert("Success")
    }
  }

  function parseTruck() {
    return trucks.map(it => {
      return { label : it.plate_number,  value: it.plate_number }
    })
  }

  function parseDriver() {
    return drivers.map(it => {
      return { label : it.name,  value: it.name }
    })
  }

  function fetchTrucks() {
    axios
      .get("https://backend-hackathon-kargo-team9.herokuapp.com/truck/")
      .then((res) => {
        setTrucks(res.data);
      });
  }

  function fetchDrivers() {
    axios
      .get("https://backend-hackathon-kargo-team9.herokuapp.com/driver/")
      .then((res) => {
        setDrivers(res.data);
      });
  }

  useEffect(() => {
    fetchTrucks();
    fetchDrivers();
  }, []);

  return (
    <Container>
      <Form>
        <h1>Allocate Shipment</h1>
        <FormRow>
          <Label htmlFor="truck">Truck</Label>
          <Select
            onChange={(i) => setSelectedTruck(i.value)}
            placeholder="Search truck here"
            options={parseTruck()}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="driver">Driver</Label>
          <Select
            onChange={(i) => setSelectedDriver(i.value)}
            placeholder="Search driver here"
            options={parseDriver()}
          />
        </FormRow>
        <ButtonRow>
          <button style={{backgroundColor:"gray", width:"100%"}} onClick={handleCancel}>Cancel</button>
          <button style={{width:"100%"}} onClick={handleAllocate}>Allocate</button>
        </ButtonRow>
      </Form>
    </Container>
  );
}

export default AllocateShipment;
