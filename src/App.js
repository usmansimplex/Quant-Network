import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Base from './components/Layouts/Base';
import Home from './pages/Home';

function App() {
  return (
    <div className=" App">
        <Base>
          <Home/>
      </Base>
    </div>
  );
}

export default App;
