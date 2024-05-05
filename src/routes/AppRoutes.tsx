import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import SignUpPage from "../pages/sign-up";
import ResetPasswordPage from "../pages/reset-password";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  );
};

export default AppRoutes;
