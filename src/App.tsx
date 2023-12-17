import React from "react";
import Navbar from "./modules/navigation/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./modules/welcome/welcome-page";
import usePageWrapper from "./hooks/usePageWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={usePageWrapper({ children: <WelcomePage /> })}>
          <Route path="" element={<WelcomePage />} />

          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
