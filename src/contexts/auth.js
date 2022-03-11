import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/Api";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  

  React.useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);








  const login = (email, password) => {
    //console.log("login auth", { email, password });
    // const loggegUser = { id: "123", email };
    // localStorage.setItem("user", JSON.stringify(loggegUser));
    // if (password === "123") {
    //   setUser(loggegUser);
    // }

    axiosInstance
    .post("authentication_token", {
      email: "andreas.thomae@kampanos.pt",
      password:  "password##",
    }).then((response)=>{
      console.log(response.data.token);
      const token = response.data.token;
      localStorage.setItem("token", token);
    })

    axiosInstance.interceptors.request.use(function (config) {
      const token = localStorage.getItem("token");
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });

    
    navigate("/");
  };










  const logout = () => {
    console.log("logout");
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
