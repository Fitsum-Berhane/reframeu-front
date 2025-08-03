// src/components/auth/ActivateAccount.tsx
import React from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const API_BASE = "https://your-api-base.com/auth"; // Replace with actual backend URL

const ActivateAccount: React.FC = () => {
  const [params] = useSearchParams();
  const token = params.get("token");

  const handleClick = async () => {
    try {
      await axios.get(`${API_BASE}/activate?token=${token}`);
      alert("Account activated");
    } catch (error) {
      alert("Activation failed");
    }
  };

  return (
    <div>
      <h2>Activate Account</h2>
      <button onClick={handleClick}>Activate</button>
    </div>
  );
};

export default ActivateAccount;

