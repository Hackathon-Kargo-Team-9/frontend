import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Radio = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Container>
      <Container2>
        <p>Role</p>
        <Radio>
          <div>
            <input
              id="transporter"
              value="transporter"
              name="user"
              type="radio"
            />
            Transporter
          </div>
          <div>
            <input id="Shipper" value="Shipper" name="user" type="radio" />
            Shipper
          </div>
        </Radio>
      </Container2>
      <button>LOGIN</button>
    </Container>
  );
}
