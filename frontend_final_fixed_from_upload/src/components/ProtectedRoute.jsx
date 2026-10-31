// frontend_final_fixed_from_upload/src/components/ProtectedRoute.jsx
// frontend_final_fixed_from_upload/src/components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // No token → not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If user role is not allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // All good → allow access
  return children;
}
