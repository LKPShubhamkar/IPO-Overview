// components/AuthGuard.tsx

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthGuard = () => {
  const { auth } = useAuth();
  const location = useLocation();

  const clientCode = new URLSearchParams(location.search).get("clientcode");
  const encryptedPan = new URLSearchParams(location.search).get("pan");

  if (!auth && !clientCode && !encryptedPan) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
