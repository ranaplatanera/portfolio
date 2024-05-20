import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={1000} closeButton />
    </>
  );
};

export default App;
