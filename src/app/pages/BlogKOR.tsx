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

export const BlogKOR = () => {
  const { resetScroll } = useIsScrolling();
  const mainQuests = useRef(null);
  const sideQuests = useRef(null);
  const blogPages : Page[] = [
    {
        name: "홈",
        link: "#/kor",
        img: "/static/home.png"
    },
    {
      name: "이력서",
      img: "/static/contact.png",
      link: "/static/레네이_이력서.pdf"
    },
    {
        name: "매인 작업",
        ref: mainQuests,
        img: "/static/main_icon.png",
        link: ""
    },
    {
        name: "사이드 작업",
        ref: sideQuests,
        img: "/static/side_icon.png",
        link: "",
    },
] 
const articlePages : Page[] = [
  {
    name: "홈",
    link: "/#/kor",
    img: "/static/home.png"
  },    
  {
    name: "브로그",
    link:  "/#/blog_kor",
    img: "/static/blog.png"
  },
  {
    name: "이력서",
    img: "/static/contact.png",
    link: "/static/레네이_이력서.pdf"
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
          <HeaderComp useScrollEffect={true} pages= {blogPages} useLanguage={{ ENG: '#/blog', KOR: '#/blog_kor'}}/>
          <BlogHero />
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
    </Routes>
    
  )
}






