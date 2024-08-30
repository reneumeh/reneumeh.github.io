import { ArticleType } from "../../types"


export const main001: ArticleType = {
    id: 3194001,
    title: 'Sample Article',
    summary: 'This is a summary of the article.',
    primaryImage: 'https://via.placeholder.com/600x400',

    content: [<h1>Lorem Ipsum</h1>, 
    <h2>Lorem Ipsum</h2>, 
    <p> This is the introduction</p>, 
    <div className="up-and-down">
      <img src='https://via.placeholder.com/300x200' /> 
      <p>An example image in the article</p> 
    </div>,
    <h3>A subheader here</h3>,
    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>,
    <div className="side-by-side">
    <video src='https://www.w3schools.com/html/mov_bbb.mp4' controls/>
    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>,
    <a href="https://www.example.com"> To the example</a>,
    <a href="reneumeh.github.io"><img src="https://via.placeholder.com/300x200"/></a>]
}
