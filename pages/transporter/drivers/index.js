import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import Select from "react-select";
import Navbar from "../../../components/Navbar";
import Content from "../../../components/Content";

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
  justify-content: flex-end;
  margin-top: 20px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
  min-height: 100vh;
`;

function Drivers() {
  function onSelectAction(action, driver) {
    switch (action) {
      case "update status":
        updateStatus(driver);
        break;
      case "change detail":
        changeDetail(driver);
        break;
    }
  }
  function updateStatus(driver) {
    console.log("change status to negate ", driver.status);
  }
  function changeDetail(driver) {
    console.log("edit ", driver.driver_name);
    location.href = "/transporter/drivers/edit/" + driver.driver_name;
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
      cell: (row) => (
        <Select
          options={row.status === "Active" ? options_active : options_deactive}
          onChange={(i) => onSelectAction(i.value, row)}
        />
      ),
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
      <Content>
        <Filter>
          <button
              style={{ marginRight: "10px" }}
              onClick={() => location.assign("/transporter/trucks/add")}
            >
              Add Driver
          </button>
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
      </Content>
    </Container>
  );
}

export default Drivers;
