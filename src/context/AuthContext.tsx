import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuthState] = useState<any>(() => {
    const data = sessionStorage.getItem("ipoAuth");
    return data ? JSON.parse(data) : null;
  });

  const setAuth = (data: any) => {
    sessionStorage.setItem("ipoAuth", JSON.stringify(data));
    setAuthState(data);
  };

  const logout = () => {
    sessionStorage.removeItem("ipoAuth");
    setAuthState(null);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
