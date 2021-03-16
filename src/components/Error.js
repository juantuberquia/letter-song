import React from "react";

const Error = ({ message }) => {
  return (
    <p className="alert alert-danger text-center font-weight-bold">{message}</p>
  );
};

export default Error;
