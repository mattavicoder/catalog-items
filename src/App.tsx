import React from "react";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import CatalogList from "./pages/catalog-list";
import CatalogItem from "./pages/catalog-item";

function App() {
  return (
    <>
      <Routes>
        <Route element={<CatalogList items={[]} />} path="/"></Route>

        <Route element={<CatalogItem />} path="/item"></Route>
      </Routes>
    </>
  );
}

export default App;
