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
        <Link href="/trucks">Trucks</Link>
        <Link href="/drivers">Drivers</Link>
      </Links>
      <div>Logout</div>
    </NavbarContainer>
  );
}

function Drivers() {
  const columns = [
    {
      name: "Driver Name",
      selector: (row) => row.driver_name,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phone_number,
    },
    {
      name: "Created At",
      selector: (row) => row.created_at,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "",
    },
  ];

  const data = [
    {
      driver_name: "Jack",
      phone_number: "+62819182",
      created_at: "2 August 2020",
      status: "Active",
    },
    {
      driver_name: "Jane",
      phone_number: "+62819183",
      created_at: "3 August 2020",
      status: "Active",
    },
  ];

  const [search, setSearch] = useState("");
  return (
    <Container>
      <Navbar />
      <Filter>
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

export default Drivers;
