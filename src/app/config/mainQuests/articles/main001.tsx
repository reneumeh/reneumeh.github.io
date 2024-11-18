import { ArticleType } from "@/app/utils/types"


export const main001: ArticleType = {
    id: 3194001,
    title: 'Becoming A Mechanical Engineer',
    summary: 'This is my take on how getting a Mechanical Engineering degree looks like. ',
    primaryImage: '/static/mechanical_components.png',

    content: [
      <p key="1">Becoming a mechanical engineer is not a straightforward, step-by-step process—it&apos;s more of a journey, and mine started at Hanyang University. I graduated from Hanyang University, with a focus on automobiles, control engineering, and artificial intelligence, and my journey was full of challenges and discoveries. This blog isn&apos;t meant to be a step-by-step guide on how to do what I did, but rather to give you some of the tools, tips, and resources that I used during my undergrad years to help you navigate your own path.</p>,
      <h2 key="2">What Do Mechanical Engineers Actually Do?</h2>,
      <p key="3">If you&apos;re wondering what mechanical engineers do, you&apos;re not alone. At the start of my studies, I had a hard time grasping it myself. And that&apos;s okay—mechanical engineering is a broad field by design. It&apos;s not as straightforward as being a doctor or an accountant, where roles are clearly defined. Our work spans industries, from designing cars to working with AI-driven systems.</p>,
      <p key="4">The best way I&apos;ve come to describe it is this: mechanical engineers are experts in efficiency. We take physical principles—laws of motion, thermodynamics, and energy transfer—and apply them to make systems work better, faster, and smarter. From the chair you&apos;re sitting on to the engine in your car, mechanical engineers have touched almost every part of modern life. Yet, our work often goes unnoticed unless you stop and really look for it.</p>,
      <p key="5">I remember my first semester feeling lost, wondering how I&apos;d fit into this vast profession. It wasn&apos;t until I started diving into the structure of my mechanical engineering degree that things began to click.</p>,
      <h2 key="6">The Structure of a Mechanical Engineering Degree</h2>,
      <p key="7">At the heart of understanding what mechanical engineers do is the structure of the curriculum itself. Think of it like building a house—each subject forms a crucial part of the foundation, walls, or roof. As I moved from one course to the next, I began to see how everything was connected.</p>,
      <h3 key="8">Preliminary Courses:</h3>,
      <p key="9">This is where you build the foundation: calculus, physics, chemistry, and other math-heavy subjects. Calculus taught me how to analyze stuff mathematically, while physics and chemistry introduced me to the basic laws that govern the physical world. Without understanding these fundamentals, there&apos;s no way to design or optimize anything. Once these building blocks were in place, I could move on to something more tangible.</p>,
      <h3 key="10">Solid Mechanics:</h3>,
      <p key="11">You see what I did there, with the tangible and the solids? Anyways, this contains courses like statics, strength of materials, dynamics, and machine elements. This is where you learn how forces interact with solid objects, so they don&apos;t break or bend too much. <i>Tip: everything bends/stretches. Even stuff you don&apos;t think would.</i> With these courses, I started to look at bridges, buildings, and even machines with a new understanding—there&apos;s real science behind why they don&apos;t fall apart! You also get to explore tools like CATIA and SolidWorks, which let you design and model mechanical systems.</p>,
      <h3 key="12">Thermofluid Mechanics:</h3>,
      <p key="13">Once you understand how solid objects handle forces, the usual next step is learning how energy and fluids behave. This contains your Thermodynamics, Fluid Dynamics, and Heat Transfer classes. This part of the degree was particularly fascinating because, at first, I didn&apos;t realize how much fluid mechanics and thermodynamics have in common. But once you look at them through the lens of energy conservation, it all makes sense. Whether it&apos;s heat generated in the engine of a car or fluid moving through a pipe, this is where you learn to control energy—one of the core principles in mechanical engineering. It&apos;s all about generating, converting, and moving energy around. You&apos;ll also simulate this on programs like ANSYS Fluent or SolidWorks. Once you learn this, you are ready to tackle more complex systems.</p>,
      <h3 key="14">System Dynamics:</h3>,
      <p key="15">I did it again. This section of the degree covers everything from vibrations and control systems to electrical circuits. At first, I couldn&apos;t see how these topics fit together. But, they all deal with how systems respond to inputs and how you can design them to react predictably. Whether it&apos;s the suspension system of a car, the actuators in a robotic arm, or the feedback loop in a control system, they all share the same core principles and calculations—differential equations. Don&apos;t worry, there&apos;s Laplace Transforms and MATLAB&apos;s Simulink will become your friend/enemy.</p>,
      <h3 key="16">Manufacturing:</h3>,
      <p key="17">This is your Manufacturing Techniques and Material Engineering classes. Courses in materials engineering and production techniques showed me how products are actually made in the world. This is where chemistry makes a bit of a comeback, especially when choosing materials that can handle different stresses and environmental conditions. One of the most practical aspects of mechanical engineering, this part of the curriculum reminded me that a brilliant design is meaningless unless it can be manufactured efficiently.</p>,
      <h3 key="18">Advanced Topics:</h3>,
      <p key="19">As you progress in your degree, you&apos;ll have the chance to dive into more specialized fields like AI, nanotechnology, or nuclear engineering. These advanced topics take the principles you&apos;ve already mastered and apply them in cutting-edge ways. For me, this is where I explored artificial intelligence and its applications in mechanical systems.</p>,
      <h2 key="20">Study Resources</h2>,
      <p key="21">When I had the idea for this blog post, I was going to make this comprehensive list of free resources that cover most of all the courses that you would face during an Undergrad MechE degree. However, during my research, I found out that someone already did that so I&apos;ll just link the document <a href='/static/mechanical-engineering-online.pdf'>here</a>. However, I do want to give special shoutouts to a few YouTube channels that were incredibly helpful to me:</p>,
      <div className="flex margin-bottom" key="22">
        <a href='https://www.youtube.com/@ProfessorLeonard'><img alt='Prof Leo' src="https://yt3.googleusercontent.com/ytc/AIdro_nyh5Rcni3aAuRdzgNu94gXscRTualKeWoj-j7g--M3Iw=s160-c-k-c0x00ffffff-no-rj" className="round"/><i>Professor Leonard</i></a>
        <p>His calculus tutorials are incredibly helpful. He breaks everything down into digestible parts, making even the toughest problems easier to tackle.</p>
      </div>,
      <div className="flex margin-bottom" key="23">
        <a href='https://www.youtube.com/@TheEfficientEngineer'><img alt='Efficient Engineer' src="https://yt3.googleusercontent.com/ytc/AIdro_kVURGdwSc6h5PfaHvRSUBPheWIqspFLKs_MJywBKtLkpQ=s160-c-k-c0x00ffffff-no-rj" className="round"/><i>Efficient Engineer</i></a>
        <p className="center">If you&apos;re a visual learner like me, this channel will be your best friend. The animations really help bring mechanical engineering concepts to life.</p>
      </div>,
      <div className="flex margin-bottom" key="24">
        <a href='https://youtube.com/@1234jhanson'><img alt='Jhanson' src="https://yt3.googleusercontent.com/gFyzdEPj7QLaU1tZCw-yWJapDVlCvJANzAsNrGa3UTfZN9-iN-jofZoQ6elUyio6IhTHu3NNIg=s160-c-k-c0x00ffffff-no-rj" className="round"/><i>Jeff Hanson</i></a>
        <p>His solid mechanics videos were my go-to during statics and dynamics. His methodical approach gave me the confidence to tackle complex problems.</p>
      </div>,
      <h2 key="25">Project Tips</h2>,
      <p key="26">One of the biggest challenges I faced as a student was working on open-ended projects. It&apos;s hard to know where to start, but over time, I developed a checklist that helped me focus on the most important aspects of any project:</p>,
      <ul key="27">
        <li className="margin-bottom"><strong>Vibrations & Resonant Frequency:</strong> What&apos;s the system&apos;s response to excitations?</li>
        <li className="margin-bottom"><strong>Weather & Climate:</strong> How does it perform in various environmental conditions?</li>
        <li className="margin-bottom"><strong>Eco-friendliness:</strong> Can it be made more sustainable?</li>
        <li className="margin-bottom"><strong>Redundancy:</strong> Are there fail-safes in place for potential failures?</li>
        <li className="margin-bottom"><strong>Efficiency:</strong> How well does it convert input to output, especially in terms of energy?</li>
        <li className="margin-bottom"><strong>Cost & Space:</strong> Can it be made more affordable and occupy less space?</li>
        <li className="margin-bottom"><strong>Modularity:</strong> Is it easy to repair, upgrade, or modify?</li>
        <li className="margin-bottom"><strong>Materials:</strong> Are the materials chosen for efficiency, durability, and availability?</li>
      </ul>,
      <h2 key="28">Study Tips</h2>,
      <p key="29">Finally, here are some study tips that I wish I had known earlier:</p>,
      <ul key="30">
        <li><h3>Group Similar Courses Together:</h3> If possible, schedule related courses like thermodynamics and fluid mechanics in the same semester. This allows you to see connections between subjects and apply knowledge across disciplines.</li>
        <li><h3>Document Your Projects:</h3> Take lots of photos, keep notes, and save everything to the cloud. You&apos;ll thank yourself later when you need to put together reports or presentations.</li>
        <li><h3>Make Summaries Before Tests:</h3> I used to make a one-page summary for each course before exams. It forces you to boil down the key points, which helps a lot with retention.<a href='/static/summary.pdf'>This is what my summaries used looked like.</a></li>
      </ul>,
      <p key="31">Becoming a mechanical engineer isn&apos;t easy, but it&apos;s incredibly rewarding. The ability to understand how the world works and apply that knowledge to create something new is a power that not many people have. Stick with it, stay curious, and you&apos;ll find your own path in this fascinating field.</p>
  ]
  
}



