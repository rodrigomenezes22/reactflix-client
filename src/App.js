import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';
function App() {
  return (
    <div className="App">
<Header />
 <Hero /> 
      <main>

        <Routes>
        <Route path="/" element={ <Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
