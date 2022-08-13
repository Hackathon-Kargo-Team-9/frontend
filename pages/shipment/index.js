import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--light);
  color: var(--darkgrey);
  max-width: 1000px;
  margin: 0 auto;
  overflow: auto;
  padding: 20px;
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

const Search = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
  gap: 48px
`;

const TableContainer = styled.div`
  margin-top: 20px;
  min-height: 100vh;
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

  const handleAddShipment = {}

  return (
    <Container>
      <Navbar />
      <Search>
        <button onClick={handleAddShipment}>Add Shipment</button>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Search>
      <TableContainer>
        <DataTable columns={columns} data={data} />
      </TableContainer>
    </Container>
  );
}

export default Shipment;
