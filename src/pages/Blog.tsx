import HeaderComp from "../components/HeaderComp"
import styled from "styled-components"
import { Page } from "../utils/types"
import { Wrapper } from "./MainENG" 

function Blog() {
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
        // ref: 
        img: "static/portfolio.png",
        link: ""
    },
    {
        name: "Side Quests",
        // link:  "/blog",
        img: "static/blog.png"
    },
] 
  return (
    <Wrapper>
      <HeaderComp useScrollEffect={true} pages= {blogPages} />
      <BlogHero />
      <MainQuests />
      <SideQuests />
    </Wrapper>
  )
}

export default Blog

const BlogHero = styled.div``;

const MainQuests = styled.div``;

const SideQuests = styled.div``;

