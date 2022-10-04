import './App.scss';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Base from './components/Layouts/Base';
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({duration: 5000});
  }, []);
  return (
    <div className=" App">
        <Base>
          <Home/>
      </Base>
    </div>
  );
}

export default App;
