import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
function App() {
  return (
    <div className="App">

      <main>
        <Routes>
        <Route path="/" element={ <Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
