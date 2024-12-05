import { ArticleType } from "@/app/utils/types"


export const main003: ArticleType = {
    id: 3194003,
    title: 'Writing A Patent (Undergrad)',
    summary: 'In this article, I will try to breakdown the receipe for a making a decent patent.',
    primaryImage: '/static/screw.webp',
    content: [
      <p key="1">Writing a patent is kind of like baking the perfect sourdough loaf. It&apos;s long, unique, and requires a lot of iterations to get just right. Now, I have never baked a sourdough loaf before, nor have I created an actual official patent, so take my advice with a pinch of salt (I am so good at connecting these metaphors). However, I did work on a project that ended in a mock patent, and this is a &quot;what I learned along the way&quot; article. My experience came from redesigning a dumpling screw at CJ Foods, which involved a lot of dough, some engineering, and a lot of revisions. But more on that later. Let&apos;s start with the basics and figure out how to craft your own “perfect sourdough” of a patent.</p>, 
      <h2 key="2">Start with a Clear Problem</h2>,
      <p key="3">Of course, you have to start somewhere, get benchmarks, and set goals. This is usually standard for any project, but it is especially important here. In my case, we couldn&apos;t really set concrete benchmarks or goals. There was a lot of paperwork before we got access to the existing design. However, we did have ideas of goals we wanted to achieve, such as reducing dough retention in the screw, which could lead to better efficiency and reduce contamination. We also wanted to redesign the screw to knead and convey dough more efficiently. In engineering terms, we wanted to increase the areas of high shear and shear rate.</p>,
      <p key="4">To get started, you want to ask yourself: What exactly are you trying to solve? The clearer you define the problem, the easier it is to develop a solution. In the context of a patent, this &quot;problem statement&quot; becomes your North Star, guiding your design and ensuring that everything you create has a purpose.</p>,
      <h2 key="5">Research Existing Solutions</h2>,
      <p key="6">Just in general, if you are trying to solve a problem, someone has probably already written a book or paper about it. You wouldn&apos;t believe that there are whole books dedicated to screw conveyors. The main objective is to find the right material. If you are still in school, check if your school allows access to academic journals. Also, try to get your hands on books dedicated to the subject. It helps you really understand what to consider and usually has most of the factors or equations you need in one place.</p>,
      <h2 key="7">Design and Iteration</h2>,
      <p key="8">For the dumpling screw, I had to balance high shear rates (to knead the dough properly) with minimizing wear and tear on the screw itself. This meant I spent a lot of time tweaking the flight angle and geometry to optimize dough flow. Before we got the official design for the screw, we came up with 5 different designs that excelled at different criteria and we also had an ideal screw that was our best composite of all those designs.</p>,
      <p key="9">At this stage, your ideas don&apos;t have to be perfect. Sketch out rough concepts, test them mentally (or through simulation software like I did with ANSYS Fluent), and refine them as you go. The goal is to iterate your design until it addresses the problem in the best possible way.</p>,
      <h2 key="10">Simulations and/or Prototyping</h2>,
      <p key="11">For any project you do, you are probably going to have to back up your claims with a test model or a simulation. This is where you break out the big guns. We started with simulations on Ansys Fluent after creating CAD models of the various adjustments that we intended to make concerning the screw.</p>,
      <div className="center" key="12">
        <video height={250} src='/static/screw.mp4' controls/>
      </div>,
      <p key="13">When we determined which modifications produced the best results for kneading the dough and transporting the dough with fewer dead zones in the chamber (food remnants), we proceeded to 3D print miniature prototypes for testing. You want to record this entire process and your results at each step in your design book or somewhere else digitally. I am not going to post long videos of dough just moving through a tube on here, but I have them. If you can, test your design through simulations or prototypes. This will help you refine your idea before putting it into words for the patent. It also gives you hard data to back up your claims, which is essential for a solid patent.</p>,
      <div className="up-and-down center" key="14">
        <img alt='example' src='/static/screw.webp' /> 
        <i>Our miniature setup</i>
      </div>,
      <h2 key="15">Drafting the Patent</h2>,
      <p key="16">The actual patent document needs to be clear, detailed, and specific. Break down the design into its core elements and explain how it solves the problem you identified in step one. We were quite fortunate because the company already had a format for patents.</p>,
      <p key="17">For our mock patent, we detailed the screw&apos;s geometry, explaining how the optimized flight angle reduced dough retention while enhancing kneading efficiency. We also provided diagrams to illustrate the design (unfortunately, I can&apos;t share those due to an NDA, but imagine a beautifully engineered piece of metal doing magic with dough).</p>,
      <p key="18">When writing your own patent, follow this basic structure:</p>,
      <ul key="19">
        <li>Title: Keep it simple but descriptive.</li>
        <li>Abstract: Summarize the project in a few sentences.</li>
        <li>Background: Explain the problem and why existing solutions are ill-equipped to address it.</li>
        <li>Detailed Description: This is the meat of your patent. Go into detail about every part of your invention and how it works.</li>
        <li>Drawings: Include diagrams or drawings to help visualize your design.</li>
      </ul>,
      <p key="20">Looking back at my experience with the dumpling screw redesign, the process of writing a mock patent taught me one thing: engineering is iterative. Whether you&apos;re crafting a patent or tweaking a design, it&apos;s all about learning from each iteration. Each step brings you closer to the final product, just like each round of revisions brings your patent closer to being airtight.</p>
    ] 
}
