import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // Importa el contexto de autenticación
import "./Login.css"

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !passwd) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        passwd,
      });

      if (response.data.success) {
        login(response.data.user);
        console.log("Redirecting to /");
        navigate('/'); 
      } else {
        setError("Credenciales incorrectas.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(
        "Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="parent">
      <h1>Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </div>
  );
}

export default Login;
