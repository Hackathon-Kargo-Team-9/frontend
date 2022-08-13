import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--light);
  color: var(--darkgrey);
  max-width: 500px;
  margin: 0 auto;
`;

const NavbarContainer = styled.nav`
  height: 80px;
  border-bottom: 1px solid var(--grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <div>TMS</div>
      <Links>
        <Link href="/shipment">Shipment</Link>
      </Links>
      <div>Logout</div>
    </NavbarContainer>
  );
}

function Shipment() {
  const columns = [
    {
      name: "Shipment",
      selector: (row) => row.shipment,
    },
    {
      name: "License",
      selector: (row) => row.license,
    },
    {
      name: "Driver\'s Name",
      selector: (row) => row.driver,
    },
    {
      name: "Origin",
      selector: (row) => row.origin,
    },
    {
      name: "Destination",
      selector: (row) => row.destination,
    },
    {
      name: "Loading Date",
      selector: (row) => row.date,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = [
    {
      shipment: "S1",
      license: "B 1111 B",
      driver: "D1",
      origin: "Jakarta",
      destination: "Surabaya",
      date: "1 Januari 2022",
      status: "Allocated",
      action: "-"
    },
    {
      shipment: "S1",
      license: "B 1111 B",
      driver: "D1",
      origin: "Jakarta",
      destination: "Surabaya",
      date: "1 Januari 2022",
      status: "Allocated",
      action: "-"
    },
    {
      shipment: "S1",
      license: "B 1111 B",
      driver: "D1",
      origin: "Jakarta",
      destination: "Surabaya",
      date: "1 Januari 2022",
      status: "Allocated",
      action: "-"
    },
    {
      shipment: "S1",
      license: "B 1111 B",
      driver: "D1",
      origin: "Jakarta",
      destination: "Surabaya",
      date: "1 Januari 2022",
      status: "Allocated",
      action: "-"
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <Container>
      <Navbar />
      <Filter>
        <div>filter truck</div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Filter>
      <TableContainer>
        <DataTable columns={columns} data={data} />
      </TableContainer>
    </Container>
  );
}

export default Shipment;
