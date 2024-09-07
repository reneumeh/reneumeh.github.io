import { ArticleType } from "../../../utils/types"


export const side002: ArticleType = {
    id: 9945002,
    title: 'How To Create A Website Portfolio',
    summary: "Don't do it.",
    primaryImage: '/static/screenshot.png',

    content: [
      <p key="1">
        Whether it&apos;s to showcase your work, apply for jobs, or impress your friends with some slick web design, having an online portfolio is a must in today&apos;s digital world. However, there&apos;s a bit of a crossroads when it comes to how you approach it.
      </p>,
      
      <h2 key="2">From Scratch vs. Using Templates</h2>,
      <p key="3">
        Now, I&apos;ll be honest with you. I spent time learning how to build websites from scratch, and while it was a great learning experience, it&apos;s not exactly what I&apos;d recommend unless you&apos;re just in it for the knowledge. Why? Because in the not-so-distant future, AI models are likely going to replicate any web design skills you&apos;ve picked up. Yep, you read that right. AI is getting that good, and it can churn out professional-looking websites with ease.
      </p>,
      <p key="4">
        If your goal is to just get your portfolio up and running, save yourself some time. There are plenty of website templates out there that are beautiful, customizable, and easy to use—no coding required. Platforms like: Squarespace, Wix, or WordPress. These platforms have drag-and-drop features, customizable themes, and can get your site up in hours, not weeks.
      </p>,
      
      <h2 key="5">But If You Want to Learn Web Development…</h2>,
      <p key="6">
        If you&apos;re like me and you just want to know how the whole thing works, then get ready to dive into the wonderful world of HTML, CSS, and JavaScript. Here&apos;s a quick roadmap to get you started:
      </p>,
      
      <ul key="7">
        <li>HTML</li>
        <p>The backbone of any website. This is where you structure your content (headings, paragraphs, images, etc.).</p>
        <li>CSS</li>
        <p>This is what makes your website look nice. It handles the styling—colors, fonts, layouts, etc.</p>
        <li>JavaScript</li>
        <p>The brains of the operation. Want interactive features? Animations? Pop-ups? This is where JavaScript comes in.</p>
      </ul>,
      
      <p key="8">
        Check out <a href='https://w3schools.com'>W3Schools</a> for tutorials that cover HTML basics. MDN Web Docs is a great resource to learn CSS step by step. Once you have a basic understanding of HTML, CSS, and JavaScript, you can level up by using frameworks like React.
      </p>,
      
      <h2 key="9">Quick Tutorial: Build a Simple Website Using React</h2>,
      
      <ul key="10">
        <li>Create the Design</li>
        <p>
          It is always great to start off with a mental map or an explicit design for what you want the site to look like. You could use one of the dedicated tools like Figma or just another design platform like Canva.
        </p>
        <li>Install Node.js and npm</li>
        <p>
          React requires a package manager like npm, which comes bundled with Node.js. You can download it <a href='https://nodejs.org'>here.</a>
        </p>
        <li>Create a React App</li>
        <p>
          Open your terminal and type:
          <p>
            npx create-react-app my-portfolio<br />
            cd my-portfolio<br />
            npm start
          </p>
        </p>
        <li>Replace Default Content</li>
        <p>
          Replace the default content with your own. The main file you&apos;ll work with is src/App.js. This is where you can start building your components (think of them as building blocks for your website).
        </p>
        <li>Structure Your Site</li>
        <p>
          Structure your site according to your design. You&apos;ll be working with components and styles to make your site look just how you want it.
        </p>
        <li>Deploy</li>
        <p>
          Once your site looks great locally, you can deploy it to platforms like Netlify or GitHub Pages to make it live.
        </p>
      </ul>,
      
      <p key="11">
        Building a website portfolio can be as simple or complex as you want it to be. If you&apos;re in a rush or just need something professional up and running, use a template. But if you&apos;re curious about how websites work and don&apos;t mind diving into some code, learning HTML, CSS, JavaScript, and frameworks like React is a fun way to get hands-on experience.
      </p>,
    ]
    
}