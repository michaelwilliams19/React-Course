import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { Navbar } from "./components/ui/Navbar";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      {/* cualquier componente dentro de app router va a poder acceder a "user" y a "dispatch" */}
      <AppRouter />
    </AuthContext.Provider>
  );
};
