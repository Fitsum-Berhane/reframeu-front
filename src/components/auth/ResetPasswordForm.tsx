// src/components/auth/ResetPasswordForm.tsx
import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const API_BASE = "https://your-api-base.com/auth"; // Replace with actual backend URL

const ResetPasswordForm: React.FC = () => {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [params] = useSearchParams();
  const token = params.get("token");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${API_BASE}/reset-password?token=${token}`, form);
      alert("Password reset successful");
    } catch (error) {
      alert("Password reset failed");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="password"
        name="password"
        placeholder="New Password"
        value={form.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ResetPasswordForm;

