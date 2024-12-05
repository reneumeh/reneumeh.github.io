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
import { FaHome } from 'react-icons/fa'
import { IoMdPerson } from "react-icons/io"
import { PiMountainsFill } from 'react-icons/pi'
import { TbAwardFilled } from 'react-icons/tb'
import { BsChatSquareTextFill } from 'react-icons/bs' 

export const BlogENG = () => {
  const { resetScroll } = useIsScrolling();
  const mainQuests = useRef(null);
  const sideQuests = useRef(null);
  const blogPages : Page[] = [
    {
        name: "Home",
        link: "#/",
        img: <FaHome className="phone-icon" />
    },
    {
      name: "Resume",
      img: <IoMdPerson />,
      link: "/static/rene-umeh-portfolio.pdf"
    },
    {
        name: "Quests",
        ref: mainQuests,
        img: <PiMountainsFill />,
        link: ""
    },
    {
        name: "Awards",
        img: <TbAwardFilled />,
        link: "#/blog/awards",
    },
] 
const articlePages : Page[] = [
  {
    name: "Home",
    link: "#/",
    img: <FaHome />
  },    
  {
    name: "Blog",
    link:  "#/blog",
    img: <BsChatSquareTextFill />,
  },
  {
    name: "Resume",
    img: <IoMdPerson />,
    link: "/static/rene-umeh-portfolio.pdf"
  },  
  {
    name: "Awards",
    img: <TbAwardFilled />,
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






