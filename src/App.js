import React from "react";
import Header from "./Components/header-section/header";
import Body from "./Components/body-section/body";
import Footer from "./Components/footer/footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Gallery from "./Components/gallery_page/gallery";
import Contact from "./Components/contact_page/contact";
import Signup from "./Components/auth/signup";
import Login from "./Components/auth/login";

function Layout() {
  const location = useLocation();

  // Hide header if on SignUp page (or "/")
  const hideHeader = location.pathname === "/signup"  || location.pathname === "/login";


  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/body" element={<Body />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
