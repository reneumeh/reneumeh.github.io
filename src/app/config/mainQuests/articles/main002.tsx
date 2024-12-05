import { ArticleType } from "@/app/utils/types"


export const main002: ArticleType = {
    id: 3194002,
    title: 'Writing An Academic Paper (Undergrad)',
    summary: 'An outline on the process and possible hurdles of writing an academic paper',
    primaryImage: '/static/paper.webp',

    content: [
    <blockquote key='0'>In this paper, considering the effects of the venturi effect on the temperature distribution in a reactor, a simulation of heat transfer in a hot wall multiple-wafer horizontal tube LPCVD reactor is developed. Investigations on the influence of the geometric characteristics of the reactor system on the temperature distribution within the wafers and in between wafers were explored. Calculations to determine the effect of the temperature distribution on the thickness of the oxide layer on the wafers were performed. In this way, information about the optimum radius for this geometry of the reactor is obtained. </blockquote>,
      <p key="1">That was the abstract for the paper that I wrote in my final year at Hanyang University. Writing an academic paper as an undergrad can feel like you&apos;re diving into the deep end of the pool—it&apos;s daunting, and you quickly realize you&apos;re surrounded by papers from experts who know a lot more than you do. Even though I only had to write mock paper that was not published in any academic journal, I still remember feeling the pressure of trying to come up with a world-revolutionizing idea that no one has ever thought of. However, the process is iterative and manageable if you take it step by step. I&apos;ll walk you through the basics of writing a research paper, based on my own experience working on a mock academic paper in a project that aimed to optimize an LPCVD reactor.</p>,
      <h2 key="2">Step 1: Choosing a Research Topic</h2>,
      <p key="3">This might be the hardest part. You want to pick something academic and important, but most groundbreaking topics are already being researched by experts who have far more experience than you do. So, what do you do?</p>,
      <p key="4">Like me, if you can&apos;t come up with something truly original, it is adviceable to  take a system or topic that already exists and investigate how changing its mechanical properties affects certain attributes. For instance, our project wasn&apos;t to reinvent the LPCVD reactor itself but to explore how we could optimize wafer uniformity by tweaking the reactor&apos;s geometry and temperature distribution. You don&apos;t have to create something revolutionary to make valuable contributions.</p>,
      <h2 key="5">Research</h2>,
      <p key="6">Once you&apos;ve got your topic, it&apos;s time to dig into the research. In our project, we began by understanding the core problem: the uniformity of oxide layers across silicon wafers in a semiconductor manufacturing process. From there, we calculated Reynolds numbers to predict flow regimes and conducted thermal simulations to analyze temperature distribution.</p>,
      <p key="7">This step is where you&apos;ll dive into technical papers, textbooks, and simulations (if applicable). If you are facing a problem, someone else has probably already written a book or a paper on it. In our case, there were a few papers on the thermal distribution in a venturi tube and also about the effect of temperature on the growth rate of the oxide layer on a silicone wafer. (Russell Stocker. (2005), Bathiébo et al (2011)) We worked with this and made some simulations to test our changes.</p>,
      <div className="flex" key="8">
          <div className="up-and-down center" key="9">
              <img alt='example' height={150} src='/static/wafer.webp' /> 
              <i>Our simulation results</i> 
          </div>,
          <div className="up-and-down center" key="10">
              <img alt='example' height={150} src='/static/wafer_2.webp' /> 
              <i>Our simulation results</i> 
          </div>
      </div>,
      <h2 key="11">Writing The Paper</h2>,
      <p key="12">Start with a clear structure: Abstract, Introduction, Methods, Results, Discussion, and Conclusion. It&apos;s important to guide your reader through the research process, starting from the problem you&apos;re addressing, how you tackled it, and what your findings are. Put your photos in there. Be definitive with your conclusions. And last but not least, cite your sources.</p>,
      <p key="13">The entire experience taught me not only technical skills but also how to communicate ideas effectively, work as a team, and manage the iterative nature of research.</p>
  ]  
}
