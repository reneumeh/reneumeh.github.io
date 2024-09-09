import { ArticleType } from "@/app/utils/types"
import Image from 'next/image';

export const main005: ArticleType = {
    id: 3194005,
    title: 'Becoming A Car Guy',
    summary: 'Every one know car go vroom vroom but how car go vroom vroom? ',
    primaryImage: '/static/car_cad.jpg',

    content: [
      <p key="1">
        My journey into the world of automobiles didn&apos;t begin with a wrench in my hand, but it sure ended up that way. It all started on the summer after my high school graduation when I signed up for an apprenticeship at a mechanic workshop. Imagine this: bright orange overalls, grease-stained hands, and a young mechanical engineering student staring wide-eyed at a pile of engine parts, wondering how they all fit together. I didn&apos;t have all the answers back then (still don&apos;t, to be honest), but that summer sparked a curiosity that led me to pursue a deeper understanding of how these machines work.
      </p>,
      
      <h2 key="2">The Workshop Experience</h2>,
      <p key="3">
        Working in a mechanic workshop was my first real hands-on experience with cars. It&apos;s one thing to read about engines and differentials in textbooks; it&apos;s another to physically swap out a spark plug or align a timing chain. However, I didn&apos;t fully understand the internal combustion engine, transmission systems, and how power is transferred through a driveshaft to the wheels. It wasn&apos;t until I joined the Hanyang RACE club that everything started to click.
      </p>,
    
      <h2 key="4">The RACE Club: Building and Breaking Cars</h2>,
      <p key="5">
        The <a href='https://racehanyang.com'>RACE club</a> was like stepping into a real-life Formula 1 pit crew. We weren&apos;t just tinkering with existing cars—we were designing and building life-size race cars from scratch for an intercollegiate competition. And let me tell you, nothing makes you appreciate the beauty of automotive engineering more than fabricating a car piece by piece. After getting in, we would have 3D modeling assignments for car parts everyday to hone CADing skills. After the preliminary stage, I started on the dynamics team, where we optimized handling and performance metrics such as steering, cornering force, drag coefficient, and yaw stability. Every tiny tweak—whether to the camber angle or the caster—had a noticeable impact on the car&apos;s behavior on the track. I would later go on to design an RC car for one of my classes at UT Austin too. <a href='/static/design notebook-converted.pdf'>This is what design Notebook looked like.</a>
      </p>,
      
      <div className="center" key="6">
        <video height={250} src='/static/race.mp4' controls />
      </div>,
      
      <h2 key="7">Books & YouTube Channel</h2>,
      <p key="8">
        Whether you prefer flipping through a comprehensive engineering book or kicking back with some in-depth YouTube videos, these resources will fuel your automotive obsession. Below are some must-read books and must-watch channels to help you dive deeper into the world of car engineering and performance.
      </p>,
      <div key="10">
        <a href='https://www.amazon.com/Vehicle-Dynamics-Douglas-Milliken-William/dp/1560915269'>
          <img alt='book cover' src='https://m.media-amazon.com/images/I/61m3gzulDoL._SY466_.jpg' height={150} />
          <i>Race Car Vehicle Dynamics</i>
        </a>
        <p>
          If you&apos;re serious about mastering the science behind how cars move, this is the book for you. It dives deep into vehicle dynamics, from handling to weight transfer, and explains how to make a car go faster and handle better on the track.
        </p>
      </div>,
      
      <div key="11">
        <a href='https://www.amazon.com/Chassis-Design-Principles-Analysis-R-206/dp/0768008263/ref=sr_1_2?crid=254SPYZSLET1Y'>
          <img alt='book cover' height={150} src='https://m.media-amazon.com/images/I/61Yi6dM+edL._SY466_.jpg' />
          <i>Chassis Engineering</i>
        </a>
        <p>
          This book is your go-to. It&apos;s a hands-on guide to chassis and suspension design, helping you optimize performance for racing or street applications.
        </p>
      </div>,
      
      <div className="flex margin-bottom" key="12">
        <a href='https://youtube.com/@Donut'>
          <img alt='donut media' className='round' src="https://yt3.googleusercontent.com/_gFkGv3SysgBQqzCC-oznppMmPAQ6vhbppnvS8juDCiTvHVICJc_tOb5hYiuGXBeRhKNruyP1g=s160-c-k-c0x00ffffff-no-rj" />
          <i>Donut Media</i>
        </a>
        <p>
          They break down complicated car mechanics into fun, easy-to-understand content. Their series &quot;Up to Speed&quot; and &quot;Bumper 2 Bumper&quot; are especially great for learning the history and intricacies of various car models.
        </p>
      </div>,
    
      <div className="flex margin-bottom" key="13">
        <a href='https://youtube.com/@EngineeringExplained'>
          <img alt='engineeringexplained' src="https://yt3.googleusercontent.com/ytc/AIdro_mFX9zV-Eb4C0r8is3Gu7UpwPFm1vH1bbQT72Rv-rme7Po=s160-c-k-c0x00ffffff-no-rj" className="round" />
          <i>Engineering Explained</i>
        </a>
        <p>
          This channel is perfect for understanding the technical side of car performance. Whether it&apos;s about how differential gears work or the advantages of turbochargers, Engineering Explained simplifies it all while still packing a ton of useful information.
        </p>
      </div>,
    
      <div className="flex margin-bottom" key="14">
        <a href='https://youtube.com/@ThrottleHouse'>
          <img alt='throttlehouse' className='round' src="https://yt3.googleusercontent.com/deDXCaHYS2Oya803d42wyok04YZtKbNZ4VxFvkn8NxHGlihxl4JbwTnwSXeNuMiVv9QOQWxL=s160-c-k-c0x00ffffff-no-rj" />
          <i>Throttle House</i>
        </a>
        <p>
          This channel combines car reviews with deeper insights into performance. If you&apos;re looking to understand how factors like handling and aerodynamics play a role in how a car drives, Throttle House is your channel.
        </p>
      </div>,
    
      <p key="15">
        My initial fascination with cars grew into a full-blown obsession during my time with the RACE club. There&apos;s something about seeing the physical manifestation of your work zooming around a track at top speed that lights a fire under you. I started with a vague idea of how cars worked, but through hands-on experience in everything from engine tuning to suspension design, I developed a deep respect for the art and science behind automotive engineering.
      </p>
    ]
    
}
