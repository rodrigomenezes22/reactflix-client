import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Footer from './Components/Footer'
import Videos from './Components/Videos'

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />

        </Routes>
      </main>
      <Videos />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
