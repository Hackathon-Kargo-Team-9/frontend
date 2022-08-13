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

  const [districts, setDistricts] = useState([])

  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  function onSubmit() {
    axios
      .post("https://backend-hackathon-kargo-team9.herokuapp.com/shipment/", {
        origin: selectedOrigin,
        destination: selectedDestination,
        loading_date: selectedDate
      })
      .then((res) => (location.href = "/shipment/"))
      .catch((err) => console.log(err));
  }

  const handleCancel = () => {
    window.history.back()
  }
  const handleSave = () => {
    if (selectedOrigin == "" && selectedDestination == "" && selectedDate == "") {
      alert("Field tidak boleh kosong")
    } else {
      onSubmit()
    }
  }

  function parseResponse() {
    return districts.map(it => {
      return { label: it.nama, value: it.nama }
    })
  }

  function fetchCity() {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=31")
      .then((res) =>
        setDistricts((prev) => [...prev, ...res.data.kota_kabupaten])
      );
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32")
      .then((res) =>
        setDistricts((prev) => [...prev, ...res.data.kota_kabupaten])
      );
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=33")
      .then((res) =>
        setDistricts((prev) => [...prev, ...res.data.kota_kabupaten])
      );
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=34")
      .then((res) =>
        setDistricts((prev) => [...prev, ...res.data.kota_kabupaten])
      );
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=35")
      .then((res) =>
        setDistricts((prev) => [...prev, ...res.data.kota_kabupaten])
      );
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=36")
      .then((res) =>
        setDistricts((prev) => [...prev, ...res.data.kota_kabupaten])
      );
  }

  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <Container>
      <Form>
        <h1>Add Shipment</h1>
        <FormRow>
          <Label htmlFor="origin">Origin</Label>
          <Select
            onChange={(i) => setSelectedOrigin(i.value)}
            placeholder="Search district here"
            options={parseResponse()}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="destination">Destination</Label>
          <Select
            onChange={(i) => setSelectedDestination(i.value)}
            placeholder="Search district here"
            options={parseResponse(districts)}
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
          <button style={{ backgroundColor: "gray", width: "100%" }} onClick={handleCancel}>Cancel</button>
          <button style={{ width: "100%" }} onClick={handleSave}>Save</button>
        </ButtonRow>
      </Form>
    </Container>
  );
}

export default AddShipment;
