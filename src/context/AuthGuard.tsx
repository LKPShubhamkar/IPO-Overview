// import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useAuth } from "../context/AuthContext";

// const AuthGuard = () => {
//   const { auth, setAuth } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const clientReference = new URLSearchParams(location.search).get(
//     "clientReference",
//   );

//   useEffect(() => {
//     if (clientReference && clientReference !== auth?.encryptedPan) {
//       setAuth({
//         encryptedPan: clientReference,
//         loginType: "SSO",
//       });

//       navigate("/ipos", { replace: true });
//     }
//   }, [clientReference, auth?.encryptedPan]);

//   if (!auth && !clientReference) {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };

// export default AuthGuard;
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { IpoClientDetailsApi } from "../services/api";

const AuthGuard = () => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [checking, setChecking] = useState(false);

  const clientReference = new URLSearchParams(location.search).get(
    "clientReference",
  );

  useEffect(() => {
    if (!clientReference) return;

    const verifyClient = async () => {
      setChecking(true);

      try {
        const response = await IpoClientDetailsApi({
          panno: clientReference,
        });

        if (!response?.isSuccess) {
          setAuth(null);
          navigate("/", { replace: true });
          return;
        }

        setAuth({
          encryptedPan: clientReference,
          loginType: "SSO",
        });

        navigate("/ipos", { replace: true });
      } catch (error) {
        setAuth(null);
        navigate("/", { replace: true });
      } finally {
        setChecking(false);
      }
    };

    verifyClient();
  }, [clientReference]);

  if (checking) {
    return null;
  }

  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
