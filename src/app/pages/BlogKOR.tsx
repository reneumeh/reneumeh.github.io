"use client"
import HeaderComp from "../components_kor/HeaderComp_kor"
import { Page } from "../utils/types"
import { Wrapper } from "./MainENG" 
import { useEffect, useRef } from "react"
import BlogHero from "../components_kor/BlogHero_kor"
import MainQuests from "../components_kor/MainQuests_kor"
import SideQuests from "../components_kor/SideQuests_kor"
import { Route, Routes } from "react-router-dom"
import Article from "../components_kor/Article_kor"
import useIsScrolling from "../hooks/useIsScrolling"
import Awards from "../components_kor/Awards_kor"
import Chatbot from "../Chatbot/ui/Chatbot"

export const BlogKOR = () => {
  const { resetScroll } = useIsScrolling();
  const mainQuests = useRef(null);
  const sideQuests = useRef(null);
  const blogPages : Page[] = [
    {
        name: "홈",
        link: "/kor",
        img: "/static/home.png"
    },
    {
      name: "이력서",
      img: "/static/contact.png",
      link: "/static/이력서_레네이.pdf"
    },
    {
        name: "프로젝트",
        ref: mainQuests,
        img: "/static/main_icon.png",
        link: ""
    },
    {
        name: "수상",
        img: "/static/side_icon.png",
        link: "/blog_kor/awards",
    },
] 
const articlePages : Page[] = [
  {
    name: "홈",
    link: "/kor",
    img: "/static/home.png"
  },    
  {
    name: "블로그",
    link:  "/blog_kor",
    img: "/static/blog.png"
  },
  {
    name: "이력서",
    img: "/static/contact.png",
    link: "/static/이력서_레네이.pdf"
  },  
  {
    name: "수상",
    img: "/static/side_icon.png",
    link: "/blog_kor/awards",
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
          <HeaderComp useScrollEffect={false} pages= {blogPages} useLanguage={{ ENG: '/blog', KOR: '/blog_kor'}}/>
          <BlogHero />
          <Chatbot />
          <MainQuests mainQuests={mainQuests}/>
          <SideQuests sideQuests={sideQuests}/>
        </Wrapper>
      }/>
      <Route 
      path="article_kor/*"
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






