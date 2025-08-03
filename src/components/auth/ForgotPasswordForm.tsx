// src/components/auth/ForgotPasswordForm.tsx
import React, { useState } from "react";
import axios from "axios";

const API_BASE = "https://your-api-base.com/auth"; // Replace with actual backend URL

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${API_BASE}/forgot-password`, { email });
      alert("Reset email sent");
    } catch (error) {
      alert("Error sending reset email");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ForgotPasswordForm;

