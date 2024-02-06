import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Profile from "./Pages/Profile";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
