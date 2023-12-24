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
      <h2 style={{ fontSize: "1.5em" }}>DATA LIST</h2>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={handleRefresh} disabled={loading}>
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr>
              <th>No.</th>
              <th>Desired Speed</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.public.input.jsonData.desire}</td>
                <td>{item.public.input.jsonInfo.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );  
};

export default DataTableFromAPI;
