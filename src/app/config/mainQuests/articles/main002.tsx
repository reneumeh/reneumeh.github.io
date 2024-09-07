import { ArticleType } from "@/app/utils/types"
import Image from 'next/image';

export const main002: ArticleType = {
    id: 3194002,
    title: 'How To Write A Paper (Undergrad)',
    summary: 'An outline on the process and possible hurdles of writing an academic paper',
    primaryImage: '/static/paper.png',

    content: [
      <p key="1">Writing an academic paper as an undergrad can feel like you&apos;re diving into the deep end of the pool—it&apos;s daunting, and you quickly realize you&apos;re surrounded by experts who seem to know more than you do. But, fear not! The process is iterative and manageable if you take it step by step. I&apos;ll walk you through the basics of writing a research paper, based on my own experience working on a mock academic paper in a project that aimed to optimize an LPCVD reactor. If you&apos;ve never heard of that, don&apos;t worry. The principles of writing a paper, regardless of the field, remain pretty similar.</p>,
      <h2 key="2">Step 1: Choosing a Research Topic</h2>,
      <p key="3">This might be the hardest part. You want to pick something academic and important, but most groundbreaking topics are already being researched by experts who have far more experience than you do. So, what do you do?</p>,
      <p key="4">If you can&apos;t come up with something truly original, don&apos;t stress. Instead, take a system or topic that already exists and investigate how changing its mechanical properties affects certain attributes. For instance, our project wasn&apos;t to reinvent the LPCVD reactor itself but to explore how we could optimize wafer uniformity by tweaking the reactor&apos;s geometry and temperature distribution. You don&apos;t have to create something revolutionary to make valuable contributions.</p>,
      <h2 key="5">Research</h2>,
      <p key="6">Once you&apos;ve got your topic, it&apos;s time to dig into the research. In our project, we began by understanding the core problem: the uniformity of oxide layers across silicon wafers in a semiconductor manufacturing process. From there, we calculated Reynolds numbers to predict flow regimes and conducted thermal simulations to analyze temperature distribution.</p>,
      <p key="7">This step is where you&apos;ll dive into technical papers, textbooks, and simulations (if applicable). If you are facing a problem, someone else has probably already written a book or a paper. In our case, there were a few papers on the thermal distribution in a venturi tube and also about the effect of temperature on the growth rate of the oxide layer on a silicone wafer. We worked with this and made some simulations to test our changes.</p>,
      <div className="flex" key="8">
          <div className="up-and-down center" key="9">
              <img alt='example' height={150} src='/static/wafer.png' /> 
              <i>Our simulation results</i> 
          </div>,
          <div className="up-and-down center" key="10">
              <img alt='example' height={150} src='/static/wafer_2.png' /> 
              <i>Our simulation results</i> 
          </div>
      </div>,
      <h2 key="11">Writing The Paper</h2>,
      <p key="12">Start with a clear structure: Abstract, Introduction, Methods, Results, Discussion, and Conclusion. It&apos;s important to guide your reader through the research process, starting from the problem you&apos;re addressing, how you tackled it, and what your findings are. Put your photos in there. Be definitive with your conclusions. And last but not least, cite your sources.</p>,
      <p key="13">The entire experience taught me not only technical skills but also how to communicate ideas effectively, work as a team, and manage the iterative nature of research.</p>
  ]  
}
