import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import MainENG from "./pages/MainENG";
import Blog from "./pages/Blog";
import MainKOR from "./pages/MainKOR";

function App() {
  return (
    <>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<MainENG />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kor" element={<MainKOR />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
