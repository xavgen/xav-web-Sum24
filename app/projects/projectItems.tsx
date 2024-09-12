"use client";

import PURPfade from "./purpFade";
import PURPfade2 from "./purpFade2";
import Image from "next/image";

type Data = {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  
  const info: Data[] = [
    {
      title: "Runway Validity App",
      description:
        "Functioned as the team lead of 3 other SWEG interns to create an application that determines the validity of military aircraft takeoffs & landings based real-time parameters collected via C# web-scraping (Robins Air Force Internship)",
      image: "/rafb.png",
      link: "",
    },
    {
      title: "RasPi Smart Car",
      description:
        "Worked as the primary coder utilizing a Raspberry Pi to control an A.I.-powered smart car simultaneously performing color & object detection, ultrasound, and infrared line tracking (Robins Air Force Internship)",
      image: "/capt_Timmy.jpg",
      link: "",
    },
    {
      title: "Portfolio Website",
      description:
        "Created this website using NextJS, TailwindCSS, and Vercel to showcase my skills, projects, and involvements.",
      image: "/me_1.jpg",
      link: "",
    },
    {
      title: "From Nava (Game)",
      description:
        "Collaborated with programming, music, design, and writer teams spanning 30+ team members to create an indie exploration/mystery game",
      image: "/fromNavaPolaroid1.png",
      link: "",
    },
    {
      title: "Halo-Halo Event",
      description:
        "Cooperated with sponsors, layout, marketing, and executive board teams to successively host 400+ guests through food, games, and performances",
      image: "/fsa_1.jpg",
      link: "",
    },
    {
        title: "Runway Validity App",
        description:
          "Functioned as the team lead of 3 other SWEG interns to create an application that determines the validity of military aircraft takeoffs & landings based real-time parameters collected via C# web-scraping (Robins Air Force Internship)",
        image: "/rafb.png",
        link: "",
      },
      {
        title: "RasPi Smart Car",
        description:
          "Worked as the primary coder utilizing a Raspberry Pi to control an A.I.-powered smart car simultaneously performing color & object detection, ultrasound, and infrared line tracking (Robins Air Force Internship)",
        image: "/capt_Timmy.jpg",
        link: "",
      },
      {
        title: "Portfolio Website test test",
        description:
          "Created this website using NextJS, TailwindCSS, and Vercel to showcase my skills, projects, and involvements.",
        image: "/me_1.jpg",
        link: "",
      },
      {
        title: "From Nava (Game)",
        description:
          "Collaborated with programming, music, design, and writer teams spanning 30+ team members to create an indie exploration/mystery game",
        image: "/fromNavaPolaroid1.png",
        link: "",
      },
      {
        title: "Halo-Halo Event",
        description:
          "Cooperated with sponsors, layout, marketing, and executive board teams to successively host 400+ guests through food, games, and performances",
        image: "/fsa_1.jpg",
        link: "",
      },
  ];



export default function PROJitems() {
    // const onClick = (id: )
  return (
    <div className="projContainer">
    <PURPfade/>
            
    <span className="pt-10 pb-10">{/*  */}
    {info.map((piece, i) => (
        <div
          className="projCard" tabIndex={0}
          key={i}
        >
            <div >
        <div className="projText" >{piece.title}</div>
        
        {/* <div className="flex justify-center" >style={{ height: '30vw'}} */}
        <div className="relative rounded-2xl flex justify-center" style={{alignItems: 'center'}}> {/* style={{width: '80%'}} style={{paddingTop: '25%', paddingBottom: '25%', paddingRight: '25%', paddingLeft: '25%'}} */}
        
        <img src={piece.image} alt={piece.title} className="projImg"/>  {/* pb-10 pl-5 pr-5 pt-2 style={{padding: '5%', paddingBottom: '20%'}} */}
        </div></div>
         </div>
      ))}

      
</span>
<PURPfade2/>
  </div>
  );
}