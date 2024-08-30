import HeaderComp from "../components/HeaderComp"
import { Page } from "../utils/types"
import { Wrapper } from "./MainENG" 
import { useRef } from "react"
import BlogHero from "../components/BlogHero"
import MainQuests from "../components/MainQuests"
import SideQuests from "../components/SideQuests"
import { Route, Routes } from "react-router-dom"
import Article from "../components/Article"

export const Blog = () => {
  const mainQuests = useRef(null);
  const sideQuests = useRef(null);
  const blogPages : Page[] = [
    {
        name: "Home",
        link: "#/",
        img: "static/home.png"
    },
    {
      name: "Resume",
      img: "static/contact.png",
      link: "/static/rene-umeh-portfolio.pdf"
    },
    {
        name: "Main Quests",
        ref: mainQuests,
        img: "static/portfolio.png",
        link: ""
    },
    {
        name: "Side Quests",
        ref: sideQuests,
        img: "static/blog.png",
        link: "",
    },
] 
  return (
    <Routes>
      <Route 
      index
      element={
        <Wrapper>
          <HeaderComp useScrollEffect={true} pages= {blogPages} />
          <BlogHero />
          <MainQuests mainQuests={mainQuests}/>
          <SideQuests sideQuests={sideQuests}/>
        </Wrapper>
      }/>
      <Route 
      path="article"
      element={
      <Wrapper>
        <HeaderComp useScrollEffect={false} pages= {blogPages} />
        <Article />
      </Wrapper>
      } />
    </Routes>
    
  )
}






