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

function EditDrivers() {
  const [driverName, setDriverName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("")
  const router = useRouter();
  const query = router.query;

  function fetchDetail() {
    axios
      .get(
        `https://backend-hackathon-kargo-team9.herokuapp.com/driver/${query.id}/`
      )
      .then((res) => {
        const data = res.data;
        setDriverName(data.name);
        setPhoneNumber(data.phone_number);

        setStatus(data.status);
      });
  }

  function submitEdit() {
    axios
      .put(
        `https://backend-hackathon-kargo-team9.herokuapp.com/driver/${query.id}/`,
        {
          name: plateNumber,
          phone_number: plateType,
          created_time: truckType,
          status: status,
        }
      )
      .then((res) => (location.href = "/transporter/drivers/"))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (query.id) {
      fetchDetail();
    }
  }, [query]);

  return (
    <Container>
      <Head>
        <title>Edit Driver</title>
      </Head>
      <Form>
        <h1>Edit Driver</h1>
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
        <button>Save Driver</button>
      </Form>
    </Container>
  );
}

export default EditDrivers;