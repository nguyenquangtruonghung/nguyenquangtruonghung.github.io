import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://eastasia.azure.data.mongodb-api.com/app/application-0-hlnel/endpoint/getForm');
        setUserData(response.data); // Trực tiếp sử dụng dữ liệu trả về
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng:</h2>
      <h5>(Refresh để cập nhật)</h5>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>
            Tên người dùng: {user.username}, Mật khẩu: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
