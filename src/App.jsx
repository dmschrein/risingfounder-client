import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Outlet } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import NewsletterSignup from './components/NewsletterSignup'; // Adjust the path as necessary
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";

axios.defaults.baseURL = "https://api.risingfounder.io" || "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast(<NewsletterSignup />, {
        position: "center",
        autoClose: false,  // Keeps the toast open until manually closed
        closeOnClick: false,
        draggable: false,
        hideProgressBar: true,
      });
    }, 5000); // Change to 5000 to make the toast appear after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Outlet />
      <ToastContainer 
        position="center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}  // This limits the number of toasts displayed at the same time
        style={{ width: "auto"}} 
      />
      <ButtonGradient />
    </div>
  );
};

export default App;
