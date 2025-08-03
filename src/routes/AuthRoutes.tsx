// src/routes/AuthRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegisterUserForm from "../components/auth/RegisterUserForm";
import RegisterPractitionerForm from "../components/auth/RegisterPractitionerForm";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";
import ActivateAccount from "../components/auth/ActivateAccount";

const AuthRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterUserForm />} />
      <Route path="/register-practitioner" element={<RegisterPractitionerForm />} />
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/reset-password" element={<ResetPasswordForm />} />
      <Route path="/activate" element={<ActivateAccount />} />
    </Routes>
  </Router>
);

export default AuthRoutes;

