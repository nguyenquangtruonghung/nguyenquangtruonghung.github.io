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
      <h2>Danh sách người dùng:</h2>
      <h5>(Refresh để cập nhật)</h5>
      <table>
        <thead>
          <tr>
            <th>Số Thứ Tự</th>
            <th>Tên Người Dùng</th>
            <th>Mật Khẩu</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
};

export default DataTableFromAPI;
