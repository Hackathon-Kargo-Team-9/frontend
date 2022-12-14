import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 40px;
  border: 1px solid var(--grey);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Radio = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.4);
`;

export default function Home() {
  const [role, setRole] = useState("");

  function handleChange(event) {
    const {value} = event.target
    setRole(value)
}

  function onClickRole() {
    if(role == "Transporter") {
      location.href = "/transporter/trucks"
    }
    else {
      location.href = "/shipment"
    }
  }

  return (
    <Container>
      <Head>
        <title>Transportation Management System</title>
      </Head>
      <Img
        src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
        alt="gudang"
      />
      <Container2>
        <p style={{ marginRight: "20px" }}>Login as</p>
        <Radio>
          <InputRow>
            <input
              id="transporter"
              value="Transporter"
              name="user"
              type="radio"
              onChange={handleChange}
            />
            Transporter
          </InputRow>
          <InputRow style={{ marginTop: "5px" }}>
            <input
              id="Shipper"
              value="Shipper"
              name="user"
              type="radio"
              onChange={handleChange}
            />
            Shipper
          </InputRow>
        </Radio>
      </Container2>
      <button onClick={onClickRole}>LOGIN</button>
    </Container>
  );
}
