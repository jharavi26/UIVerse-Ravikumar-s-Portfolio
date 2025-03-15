import { useEffect, useRef } from "react";
import "./Home.css";
import profile from "../../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function Home() {

  useGSAP(()=>{
    let t1 = gsap.timeline();
    t1.from(".line1" , {
      y : 80,
      duration : 1,
      opacity : 0
    })
    t1.from(".line2",{
      y : 80,
      duration : 1,
      opacity : 0,
    })
    gsap.from(".right img",{
      x : 200,
      duration : 1,
      opacity : 0,
    })
  })

  
  return (
    <div id="home">
      <div className="left">
        <div className="details">
          <div className="line1">I'm </div>
          <div className="line2">Ravikumar Jha</div>
          <span className="typing-effect">
            <Typewriter
              words={[
                "Frontend Developer 🚀",
                "React Enthusiast 💻",
                "UI/UX Passionate 🎨",
                "Building Scalable Web Apps 🌐",
              ]}
              loop={true} // Infinite loop
              typeSpeed={50} // Speed of typing
              deleteSpeed={40} // Speed of deleting
              delaySpeed={1000}
              size={100} // Pause before retyping
            />
          </span>

          <div className="des">
            <Typewriter
              words={[
                "I am convinced that technology has the ability to turn concepts into tangible results. As a Frontend Developer, my focus is on building engaging and user-friendly web applications utilizing React and JavaScript. My enthusiasm for technology enhances my analytical skills, allowing me to create solutions that are both practical and user-friendly. I take pleasure in working with teams, exploring new technologies, and expanding the limits of web development.",
              ]}
              loop={1} // Runs only once
              typeSpeed={50} // Typing speed
              deleteSpeed={999999} // Prevent deletion
              delaySpeed={999999} // Prevent retyping
            />
          </div>

          <button>Hire me</button>
        </div>
      </div>

      <div className="right">
        <img src={profile} alt="profile-image" />
      </div>
    </div>
  );
}

export default Home;
