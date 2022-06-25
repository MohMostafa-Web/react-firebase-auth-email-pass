import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();

  /* Check if user is null, Navigate to home page */
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
