import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import Select from "react-select";
import Head from "next/head";
import axios from "axios";

const TRUCK_TYPES = [
  {
    label: "Tronton",
    value: "Tronton",
  },
  {
    label: "Container",
    value: "Container",
  },
  {
    label: "CDE",
    value: "CDE",
  },
];

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

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
        <Link href="/trucks">Trucks</Link>
        <Link href="/drivers">Drivers</Link>
      </Links>
      <div>Logout</div>
    </NavbarContainer>
  );
}

function Trucks() {
  function onSelectAction(action, truck) {
    switch (action) {
      case "update status":
        updateStatus(truck);
        break;
      case "change detail":
        changeDetail(truck);
        break;
    }
  }
  function updateStatus(truck) {
    console.log("change status to negate ", truck.status);
  }
  function changeDetail(truck) {
    location.href = "/transporter/trucks/edit/" + truck.id;
  }
  const options_active = [
    {
      label: "Change Detail",
      value: "change detail",
    },
    {
      label: "Deactivate Unit",
      value: "update status",
    },
  ];
  const options_deactive = [
    {
      label: "Change Detail",
      value: "change detail",
    },
    {
      label: "Activate Unit",
      value: "update status",
    },
  ];
  const columns = [
    {
      name: "License Number",
      selector: (row) => row.plate_number,
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
      selector: (row) => row.production_year,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "",
      cell: (row) => (
        <Select
          options={row.status === "Active" ? options_active : options_deactive}
          onChange={(i) => onSelectAction(i.value, row)}
        />
      ),
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedTruckType, setSelectedTruckType] = useState(null);
  const [trucks, setTrucks] = useState([]);

  function fetchTrucks() {
    axios
      .get("https://backend-hackathon-kargo-team9.herokuapp.com/truck/")
      .then((res) => {
        setTrucks(res.data);
      });
  }

  useEffect(() => {
    fetchTrucks();
  }, []);

  return (
    <Container>
      <Head>
        <title>Trucks</title>
      </Head>
      <Navbar />
      <Filter>
        <div>
          <Select
            onChange={(n) => setSelectedTruckType(n.value)}
            options={TRUCK_TYPES}
          />
        </div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Filter>
      <TableContainer>
        <DataTable columns={columns} data={trucks} />
      </TableContainer>
    </Container>
  );
}

export default Trucks;
