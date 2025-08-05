import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "./pages/Instructions";
import Detection from "./pages/Detection";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/detection" element={<Detection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;