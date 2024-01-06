import React, { useState, useEffect } from "react";
import axios from "axios";

const DataTableFromAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://eastasia.azure.data.mongodb-api.com/app/application-0-hlnel/endpoint/getForm"
      );
      setData(response.data);
      setError(null);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
      setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    fetchData();
  };

  return (
    <div>
      <h2>DATA LIST
      <div>
        <button onClick={handleRefresh} disabled={loading}>
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Setpoint</th>
                <th>Error</th>
                <th>Integral</th>
                <th>Derivative</th>
                <th>Control Value</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.public.input.jsonData.setpoint}</td>
                  <td>{item.public.output.jsonData.e_t}</td>
                  <td>{item.public.output.jsonData.integral}</td>
                  <td>{item.public.output.jsonData.derivative}</td>
                  <td>{item.public.output.jsonData.controlValue}</td>
                  <td>{item.public.input.jsonInfo.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default DataTableFromAPI;
