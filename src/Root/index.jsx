import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TodoPage from "../pages/Todo";

const Root = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/todo" />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default Root;