import React from "react";
import Navbar from "./modules/navigation/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./modules/welcome/welcome-page";
import usePageWrapper from "./hooks/usePageWrapper";
import ContactPage from "./modules/contact/contact-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={usePageWrapper({ children: <WelcomePage /> })}>
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route
          path=""
          element={usePageWrapper({ children: <WelcomePage /> })}
        />

        <Route
          path="/contact"
          element={usePageWrapper({ children: <ContactPage /> })}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
