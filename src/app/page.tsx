"use client";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import MainENG from "./pages/MainENG";
import { BlogENG } from "./pages/BlogENG";
import { BlogKOR } from "./pages/BlogKOR";
import MainKOR from "./pages/MainKOR";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


const ClientSideHashRouter = dynamic(() => import("react-router-dom").then((mod) => mod.HashRouter), { ssr: false });
const Chatbot = dynamic(() => import("./Chatbot/ui/Chatbot"), { ssr: false });

function Home() {
  const [isPageRendered, setIsPageRendered] = useState(false);

  useEffect(() => {
    setIsPageRendered(true);
  }, []);

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover
      theme="light"
      transition= {Slide}
      />
      <ClientSideHashRouter>
        <Routes>
          <Route path="/" element={<MainENG />} />
          <Route path="/blog/*" element={<BlogENG />} />
          <Route path="/blog_kor/*" element={<BlogKOR />} />
          <Route path="/kor" element={<MainKOR />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ClientSideHashRouter>
      {isPageRendered && <Chatbot />}
    </>
  );
}

export default Home;
