import "./App.scss";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "./components/Layouts/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import More from "./pages/More";

function App() {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  return (
    <div className=" App">
      <BrowserRouter>
          <Base>
        <Routes>
            <Route index path='/' element={<Home />}/>
            <Route path='/more' element={<More />}/>
        </Routes>
          </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
