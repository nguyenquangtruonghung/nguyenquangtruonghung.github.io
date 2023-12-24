import React, { useState, useEffect } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import axios from "axios";
import "./UserLogin.css"; // Import file CSS tùy chỉnh

const schema = {
  title: "ENGINE CONTROL INFORMATION",
  type: "object",
  required: ["desire"],
  properties: {
    desire: { type: "number", title: "Enter the desired engine control speed (RPM)" },
  },
};

const TimeDisplay = () => {
  const [time, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p style={{ fontSize: "1.2em" }}>
      Current Time: {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

const UserLogin = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async ({ formData }) => {
    try {
      const dataWithTime = {
        ...formData,
        time: new Date().toISOString(),
      };

      console.log("Dữ liệu gửi đi:", dataWithTime);

      // Gửi POST request đến endpoint thứ nhất
      const response = await axios.post(
        "https://us-east-1.aws.data.mongodb-api.com/app/agg_func-voayj/endpoint/update_input",
        dataWithTime
      );

      console.log("Kết quả từ server:", response.data);

      setFormData({});
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }
  };

  return (
    <div className="auth-form-container">
      <Form
        schema={schema}
        validator={validator}
        formData={formData}
        onChange={({ formData }) => setFormData(formData)}
        onSubmit={handleSubmit}
      />
      <TimeDisplay />
    </div>
  );
};

export default UserLogin;
