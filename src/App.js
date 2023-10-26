import "./App.css";
import Home from "./Home";
import MovieDetail from "./components/modal/MovieDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  )
}

export default App;
