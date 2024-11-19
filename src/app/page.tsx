"use client"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import MainENG from "./pages/MainENG";
import { BlogENG } from "./pages/BlogENG";
import { BlogKOR } from "./pages/BlogKOR";
import MainKOR from "./pages/MainKOR";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainENG />} />
          <Route path="/blog/*" element={<BlogENG />} />
          <Route path="/blog_kor/*" element={<BlogKOR />} />
          <Route path="/kor" element={<MainKOR />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;