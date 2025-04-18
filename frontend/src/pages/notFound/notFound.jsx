import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className="page not-found">
      <h1>404 - Page not found</h1>
      <p>We're sorry, but the page you're looking for doesn't exist.</p>
      <div className="button-wrapper">
        <button
          className="btn btn-primary"
          onClick={() => {
            const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
            if (isAuthenticated) {
              navigate("/admin/dashboard");
            } else {
              navigate("/");
            }
          }}
        >
          Go back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;