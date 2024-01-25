import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./component/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
