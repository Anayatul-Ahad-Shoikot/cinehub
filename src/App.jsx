import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/blogs" element={ <Blogs /> } />
                  <Route path="/about" element={ <About /> } />
                  <Route path="/contact" element={ <Contact /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
