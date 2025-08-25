import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container d-flex justify-content-center">
        <div className="card shadow-lg p-5" style={{ maxWidth: "500px", width: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
