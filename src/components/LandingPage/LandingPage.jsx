import React from "react";
import "./LandingPage.css";
import logo from "../../logo.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [status, setStatus] = useState();
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getStatus = async () => {
      const res = await axios.get(URL);
      setStatus(res.status === 200);
    };
    getStatus();
  }, [URL]);

  return (
    <div className="LandingPage">
      <header className="Landing-header">
        <img src={logo} className="Landing-logo" alt="logo" />
        <p>
          {status === undefined
            ? "Loading..."
            : status
            ? "Successfully connected to express server."
            : "Connection to express server failed."}
        </p>
      </header>
    </div>
  );
};

export default LandingPage;
