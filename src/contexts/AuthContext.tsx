import { createContext, useContext, useState } from "react";

interface User {
  name: string;
  email: string;
  role: string;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);


  const login = async (email: string, password: string) => {
    // Simulación de login: cualquier email y password son válidos
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser({
      name: "Usuario Demo",
      email,
      role: "admin"
    });
  };


  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}