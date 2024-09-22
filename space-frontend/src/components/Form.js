import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "./Form.css";

import LodingWrapper from "./Loading";
function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setUpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const Extra = () => {
    if (method === "login") {
      return (
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      );
    } else {
      return (
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      );
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "0 auto",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        />
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => {
            setUpassword(e.target.value);
          }}
          placeholder="Password"
        />
        {loading && <LodingWrapper />}
        <button className="form-button" type="submit">
          {name}
        </button>
        <Extra />
      </form>
    </div>
  );
}

export default Form;
