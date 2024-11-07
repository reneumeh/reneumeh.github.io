"use client"
import HeaderComp from "../components/HeaderComp"
import { Page } from "../utils/types"
import { Wrapper } from "./MainENG" 
import { useEffect, useRef } from "react"
import BlogHero from "../components/BlogHero"
import MainQuests from "../components/MainQuests"
import SideQuests from "../components/SideQuests"
import { Route, Routes } from "react-router-dom"
import Article from "../components/Article"
import useIsScrolling from "../hooks/useIsScrolling"
import Awards from "../components/Awards"

export const BlogENG = () => {
  const { resetScroll } = useIsScrolling();
  const mainQuests = useRef(null);
  const sideQuests = useRef(null);
  const blogPages : Page[] = [
    {
        name: "Home",
        link: "#/",
        img: "/static/home.png"
    },
    {
      name: "Resume",
      img: "/static/contact.png",
      link: "/static/rene-umeh-portfolio.pdf"
    },
    {
        name: "Quests",
        ref: mainQuests,
        img: "/static/main_icon.png",
        link: ""
    },
    {
        name: "Awards",
        img: "/static/side_icon.png",
        link: "#/blog/awards",
    },
] 
const articlePages : Page[] = [
  {
    name: "Home",
    link: "#/",
    img: "/static/home.png"
  },    
  {
    name: "Blog",
    link:  "#/blog",
    img: "/static/blog.png"
  },
  {
    name: "Resume",
    img: "/static/contact.png",
    link: "/static/rene-umeh-portfolio.pdf"
  },  
  {
    name: "Awards",
    img: "/static/side_icon.png",
    link: "#/blog/awards",
  },
]

useEffect(() => {
  resetScroll(); 
}, [resetScroll]);
  return (
    <Routes>
      <Route 
      index
      element={
        <Wrapper>
          <HeaderComp useScrollEffect={false} pages= {blogPages} useLanguage={{ ENG: '#/blog', KOR: '#/blog_kor'}} />
          <BlogHero />
          <MainQuests mainQuests={mainQuests}/>
          <SideQuests sideQuests={sideQuests}/>
        </Wrapper>
      }/>
      <Route 
      path="article"
      element={
      <Wrapper>
        <HeaderComp useScrollEffect={false} pages= {articlePages} />
        <Article />
      </Wrapper>
      } />
      <Route 
      path="awards"
      element={
      <Wrapper>
        <HeaderComp useScrollEffect={false} pages= {articlePages} />
        <Awards />
      </Wrapper>
      } />
    </Routes>
    
  )
}






