import HeaderComp from "../components/HeaderComp"
import { Page } from "../utils/types"

function Blog() {
  const blogPages : Page[] = [
    {
        name: "Home",
        link: "/",
        img: "static/home.png"
    },
    {
      name: "Resume",
      // ref: Contact,
      img: "static/contact.png",
      link: ""
    },
    {
        name: "Main Quests",
        // ref: 
        img: "static/portfolio.png",
        link: ""
    },
    {
        name: "Side Quests",
        link:  "/blog",
        img: "static/blog.png"
    },
] 
  return (
    <HeaderComp useScroll={true} pages= {blogPages} />
  )
}

export default Blog
