import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import Select from "react-select";
import axios from "axios";

import Navbar2 from "../../components/Navbar2";
import Content from "../../components/Content";

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

const Search = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
  gap: 48px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
  min-height: 100vh;
`;

function Shipment() {
  const options = [
    {
      label: "Allocate Shipment",
      value: "Allocate Shipment",
    },
    {
      label: "Update Status",
      value: "Update Status",
    },
  ];

  function onSelectAction(action) {
    switch (action) {
      case "Allocate Shipment":
        location.href = "/shipment/allocate/";
        break;
      case "Update Status":
        location.href = "/shipment/edit/";
        break;
    }
  }

  const columns = [
    {
      name: "Shipment",
      selector: (row) => row.id,
    },
    {
      name: "License",
      selector: (row) => row.license_number,
    },
    {
      name: "Driver's Name",
      selector: (row) => "",
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
      selector: (row) => row.loading_date,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      cell: (row) => (
        <Select
          options={options}
          onChange={(i) => onSelectAction(i.value, row)}
        />
      ),
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [shipment, setShipment] = useState([]);

  const handleAddShipment = () => {
    window.location.assign("/shipment/add");
  };

  function fetchTrucks() {
    axios
      .get("https://backend-hackathon-kargo-team9.herokuapp.com/shipment/")
      .then((res) => {
        setShipment(res.data);
      });
  }

  useEffect(() => {
    fetchTrucks();
  }, []);

  return (
    <Container>
      <Navbar2 />
      <Content>
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
          <DataTable columns={columns} data={shipment} />
        </TableContainer>
      </Content>
    </Container>
  );
}

export default Shipment;
