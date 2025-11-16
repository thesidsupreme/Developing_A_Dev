import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/card";

function App() {
  const array = [1,2,4,5,6,6]


  return (
    <>
      <Card username = "Siddharth" arr = {array}/>
      <Card  arr = {array}/>
      <Card username = "Tannu" arr = {array}/>
    </>
  );
}

export default App;
