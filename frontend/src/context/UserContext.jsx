import { createContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const cookies = new Cookies();
  const [currentUser, setCurrentUser] = useState(() => {
    // Récupérer l'utilisateur depuis localStorage au chargement
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });



  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    cookies.remove("token");
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

