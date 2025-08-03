// src/components/auth/RegisterUserForm.tsx
import React, { useState } from "react";
import axios from "axios";

const API_BASE = "https://your-api-base.com/auth"; // Replace with actual backend URL

const RegisterUserForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    languages: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${API_BASE}/register`, form);
      alert("User registered");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      {Object.entries(form).map(([key, value]) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={value}
          onChange={handleChange}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RegisterUserForm;

