import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode has been Enabled", "danger");
      document.title = "TextUtils- Dark Mode";
      // setInterval(()=>{
      //   document.title= 'TextUtils'
      // },2000);
      // setInterval(()=>{
      //   document.title= 'TextUtils- Dark Mode'
      // },1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={togglemode} />
        {/* <Navbar title="TextUtils2" aboutText="About Us" /> 
     <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route exact path="/about" element = {<About />}>
            </Route>
            <Route index element= {<TextForm
                showAlert={showAlert}
                heading="Enter text to analyze below"
                mode={mode}
              />}>
              
            </Route>
          </Routes>

          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
