import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import Select from "react-select";
import Head from "next/head";
import axios from "axios";

import Navbar from "../../../components/Navbar";
import Content from "../../../components/Content";

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
  margin: 0 auto;
  overflow: auto;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

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
    axios
      .put(
        `https://backend-hackathon-kargo-team9.herokuapp.com/truck/${truck.id}/`,
        {
          plate_number: truck.plate_number,
          plate_type: truck.plate_type,
          truck_type: truck.truck_type,
          production_year: parseInt(truck.production_year),
          status: truck.status === "Active" ? "Inactive" : "Active",
        }
      )
      .then((res) => location.reload())
      .catch((err) => alert("Gagal mengubah status truck"));
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
      cell: (row) => (
        <Link href={`/transporter/trucks/${row.id}`}>{row.plate_number}</Link>
      ),
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
          placeholder="Update"
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

  function filterredTrucks() {
    return trucks.filter((truck) => {
      if (selectedTruckType) {
        return (
          truck.truck_type == selectedTruckType &&
          truck.plate_number.toLowerCase().includes(search.toLowerCase())
        );
      }
      return truck.plate_number.toLowerCase().includes(search.toLowerCase());
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
      <Content>
        <Filter>
          <div>
            <Select
              onChange={(n) => setSelectedTruckType(n.value)}
              options={TRUCK_TYPES}
            />
          </div>
          <div>
            <button
              style={{ marginRight: "10px" }}
              onClick={() => location.assign("/transporter/trucks/add")}
            >
              Add Truck
            </button>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Filter>
        <TableContainer>
          <DataTable columns={columns} data={filterredTrucks()} />
        </TableContainer>
      </Content>
    </Container>
  );
}

export default Trucks;
