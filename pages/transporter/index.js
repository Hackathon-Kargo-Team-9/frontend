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

function Transporter() {
  const columns = [
    {
      name: "License Number",
      selector: (row) => row.license_number,
    },
    {
      name: "Truck Type",
      selector: (row) => row.truck_type,
    },
    {
      name: "Plate Type",
      selector: (row) => row.plate_type,
    },
    {
      name: "Production Year",
      selector: (row) => row.prod_year,
    },
    {
      name: "",
    },
  ];

  const data = [
    {
      license_number: "B 1234 CDE",
      truck_type: "Tronton",
      plate_type: "Black",
      prod_year: "2022",
    },
    {
      license_number: "B 1234 AHS",
      truck_type: "Tronton",
      plate_type: "Black",
      prod_year: "2022",
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

export default Transporter;
