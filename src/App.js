import { BrowserRouter as Router, Route, Routes } from "react-router-dom/dist";
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
