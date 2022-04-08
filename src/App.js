import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [buttonText, setButtonText] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      setButtonText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      showAlert("Light Mode enabled", "success");
    }
    else {
      setMode("dark");
      setButtonText("Enable Light Mode");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = 'white';
      showAlert("Dark Mode enabled", "success");

    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="text-utility" mode={mode} changeMode={changeMode} btnText={buttonText} />
        <Alert alert={alert} />
      {/* switch is repaced by routes */}
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm  heading="Enter your Text Below" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;

//props properties
