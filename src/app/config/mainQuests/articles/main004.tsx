import { ArticleType } from "@/app/utils/types"
import Image from 'next/image';

export const main004: ArticleType = {
    id: 3194004,
    title: 'How To Get Into AI',
    summary: 'Just the basics in the every changing world of Artificial Intelligence.',
    primaryImage: '/static/transformer.png',
    content: [
      <p key="1">
        My formal introduction to machine learning (ML) came during my 2nd-year AI class with Professor Kim Douglas Deok Su. The course took us through the basics—starting with the history of AI, the evolution of neural networks, and how machine learning became the juggernaut that it is today. By the end of the class, we had moved from theory to application, building our own CNNs from scratch.
      </p>,
      <p key="2">
        After getting my feet wet in AI, I wanted more than just academic knowledge. So, I secured an internship at the Korean Institute of Science and Technology (KIST), where I joined Professor Lim Hwa Sup&apos;s AI lab. This was where I really got to see AI in action. Twice a week, we&apos;d present on cutting-edge research papers, discussing everything from DreamFusion to Plenoxels. It was also where I attended my first academic conference, the Korean Conference on Computer Vision (KCCV), which opened my eyes to the sheer breadth of AI applications.
      </p>,
      <p key="3">
        If you&apos;re reading this, you might be wondering how to start your own AI journey. The first step is often the hardest—finding a project. I&apos;ve been there, staring at a blank page thinking, “Everything has already been done!” But here&apos;s the trick: you don&apos;t need to invent something entirely new. Instead, take a system that already exists and experiment with how mechanical or physical properties affect its performance. It&apos;s a great way to learn about AI in a way that&apos;s practical and engaging.
      </p>,
      <h2 key="4">Learning Materials</h2>,
      <p key="5">
        The great thing about AI is that there are tons of free resources to get started. You don&apos;t need a fancy degree or expensive textbooks to begin learning. Here are a few free and reliable sources to help you get started:
      </p>,
      <div className="flex margin-bottom" key="6">
        <a href='https://www.youtube.com/@codebasics' target="_blank">
          <img alt='codebasics' className='round' src="https://yt3.googleusercontent.com/DZidE7P_ESU8Y_dZ5_PrTAItOkSuayCfE2tYkKCnjtFYes7nA2sE-UF1fi3tZLjozlg0h1aK=s160-c-k-c0x00ffffff-no-rj" />
          <i>CodeBasics</i>
        </a>
        <p>
          This YouTube channel covers Python programming, machine learning, and deep learning. It&apos;s a great place to start if you want to get into AI with clear, step-by-step tutorials.
        </p>
      </div>,
      <div className="flex margin-bottom" key="7">
        <a href='https://www.youtube.com/watch?v=dJYGatp4SvA&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r' target="_blank">
          <img alt='justin johnson' className='round' src="https://yt3.googleusercontent.com/ytc/AIdro_n6J3F2cS4pIQ4Aly4EOcV6ra8SBZwg9HE6nu8TTeeAScI=s160-c-k-c0x00ffffff-no-rj" />
          <i>Professor Justin Johnson</i>
        </a>
        <p>
          Another fantastic YouTuber who breaks down complex topics into digestible, beginner-friendly lessons. His tutorials are perfect for those who want a deeper dive into neural networks, machine learning algorithms, and AI fundamentals.
        </p>
      </div>,
      <div className="flex margin-bottom" key="8">
        <a href='https://www.youtube.com/@3blue1brown' target="_blank">
          <img alt='3blue1brown' className='round' src="https://yt3.googleusercontent.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s160-c-k-c0x00ffffff-no-rj" />
          <i>3 Blue 1 Brown</i>
        </a>
        <p>
          The animations on this one really help bring all the interesting concepts to life in a way I cannot explain.
        </p>
      </div>,
      <h2 key="9">Competitions</h2>, 
      <p key="10">
        Competitions provide you with real-world datasets and problems to solve, which is an incredible learning experience.
      </p>,
      <div key="11">
        <a href='https://kaggle.com'>
          <img alt='kaggle' src="https://en.wikipedia.org/wiki/File:Kaggle_Logo.svg" sizes="150px" />
          <i>Kaggle</i>
        </a>
        <p>
          Kaggle is the go-to platform for ML competitions. You can find datasets on everything from medical imaging to self-driving cars, and the community is always ready to offer help. Even if you don&apos;t win, the experience is invaluable.
        </p>
      </div>,
      <div key="12">
        <a href='https://youtube.com'>
          <img alt='Drivendata' src="https://google.com/" />
          <i>DrivenData</i>
        </a>
        <p>
          Another competition platform similar to Kaggle but often focusing on social impact projects. It&apos;s a great way to use AI for good causes while honing your skills.
        </p>
      </div>,
      <p key="13">
        You don&apos;t need to have all the answers right away—just the curiosity to keep exploring. And with the rapid developments in AI, from DreamFusion to Plenoxels, there&apos;s always something exciting on the horizon.
      </p>
    ]    
}
