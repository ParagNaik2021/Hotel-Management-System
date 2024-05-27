import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AddRoom from "./components/room/AddRoom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ExistingRooms from "./components/room/ExistingRooms";

function App() {
  return (
    <div>
      <AddRoom />
      <ExistingRooms />
    </div>
  );
}

export default App;
