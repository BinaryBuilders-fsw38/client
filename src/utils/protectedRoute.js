import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  // Check if the user is authenticated (you may use your own logic)
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
