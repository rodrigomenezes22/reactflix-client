import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Footer from './Components/Footer'
import Videos from './Components/Videos'
import CmsVideos from './Components/CmsVideos';

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/adm-videos" element={ <CmsVideos />} />

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
