import HeaderComp from "../components/HeaderComp"
import { Page } from "../utils/types"
import { Wrapper } from "./MainENG" 
import { useRef } from "react"
import BlogHero from "../components/BlogHero"
import MainQuests from "../components/MainQuests"
import SideQuests from "../components/SideQuests"

function Blog() {
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
    <Wrapper>
      <HeaderComp useScrollEffect={true} pages= {blogPages} />
      <BlogHero />
      <MainQuests mainQuests={mainQuests}/>
      <SideQuests sideQuests={sideQuests}/>
    </Wrapper>
  )
}

export default Blog




