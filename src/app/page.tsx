"use client"
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import MainENG from "./pages/MainENG";
import { BlogENG } from "./pages/BlogENG";
import { BlogKOR } from "./pages/BlogKOR";
import MainKOR from "./pages/MainKOR";
import dynamic from 'next/dynamic';

const ClientSideBrowserRouter = dynamic(() => import('react-router-dom').then(mod => mod.BrowserRouter), { ssr: false });

function Home() {
  return (
    <>
      <ClientSideBrowserRouter>
        <Routes>
          <Route path="/" element={<MainENG />} />
          <Route path="/blog/*" element={<BlogENG />} />
          <Route path="/blog_kor/*" element={<BlogKOR />} />
          <Route path="/kor" element={<MainKOR />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ClientSideBrowserRouter>
    </>
  );
}

export default Home;