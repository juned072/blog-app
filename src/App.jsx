import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import { BlogProvider } from "./context/BlogContext";
import ErrorPage from "./pages/ErrorPage";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#16161a] text-white">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/addblog" element={<AddBlog />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
};

export default App;
