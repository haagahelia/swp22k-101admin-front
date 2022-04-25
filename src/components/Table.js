import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import axios from "axios";
import dayjs from "dayjs";

function Deliverylist() {
  const [end, setEnd] = useState("all");
  const [uuid, setUuid] = useState("");
  const [status, setStatus] = useState("");

  function handleChange(e, value) {
    setEnd(value);
  }

  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    fetchDelivery();
  }, []);

  const fetchDelivery = () => {
    axios
      .get("http://localhost:8777/api/report/")
      .then((response) => setDeliveries(response.data))
      .then(console.log(deliveries))
      .catch((err) => console.error(err));
  };

  const columns = [
    {
      headerName: "Universally Unique Identifier",
      field: "uuid",
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: "Date and Time of Delivery",
      valueGetter: ({ data }) => {
        return dayjs(data.pickup_time).format("DD/MM/YYYY h:mm a");
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: "Status",
      valueGetter: ({ data }) => {
        if (data.pu_signature_image !== null) {
          return "SIGNED";
        } else {
          return "NOT SIGNED";
        }
      },
      sortable: true,
      filter: true,
      width: 250,
    },
  ];

  return (
    <div style={{ height: 540, width: "auto", backgroundColor: "#161517" }}>
      <AgGridReact
        rowData={deliveries}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
        suppressCellSelection={true}
      ></AgGridReact>
    </div>
  );
}

export default Deliverylist;
