import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to="/" />;
  if (!allowedRoles.includes(user?.role)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
