import { BrowserRouter, Route, Routes } from "react-router";
import { Aspirations } from "./Components/Routes/Aspirations";
import { Home } from "./Components/Routes/Home";
import { Projects } from "./Components/Routes/Projects";
import { Experience } from "./Components/Routes/Experience";
import { Layout } from "./Components/Nav/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aspirations" element={<Aspirations />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
