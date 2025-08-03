// src/components/auth/RegisterPractitionerForm.tsx
import React, { useState } from "react";
import axios from "axios";

const API_BASE = "https://your-api-base.com/auth"; // Replace with actual backend URL

const RegisterPractitionerForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    languages: "",
    licenseNumber: "",
    yearsOfExperience: 0,
    specialtyIds: "",
    bio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...form,
      yearsOfExperience: Number(form.yearsOfExperience),
      specialtyIds: form.specialtyIds.split(",").map(id => id.trim()),
    };
    try {
      await axios.post(`${API_BASE}/register-p`, payload);
      alert("Practitioner registered");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register Practitioner</h2>
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

export default RegisterPractitionerForm;

