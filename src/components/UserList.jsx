import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap';
import moment from 'moment';

const DataTableFromAPI = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://eastasia.azure.data.mongodb-api.com/app/application-0-hlnel/endpoint/getForm"
      );
      setData(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    getData();
  });

  const formatTime = (time) => {
    return moment.utc(time).utcOffset(7).format('DD-MM-YYYY HH:mm:ss');
  };
  
  return (
    <Table className="table-responsive">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Setpoint</th>
          <th scope="col">Error</th>
          <th scope="col">Speed</th>
          <th scope="col">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.public.input.jsonData.setpoint}</td>
            <td>{item.public.output.jsonData.e_t}</td>
            <td>{item.public.input.jsonData.rpm}</td>
            <td>{formatTime(item.public.output.jsonInfo.ver)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTableFromAPI;
