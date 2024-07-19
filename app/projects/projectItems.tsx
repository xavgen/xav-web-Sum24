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
  ];

export default function PROJitems() {
  return (
    <div className="projContainer">
    <PURPfade/>
            
    <span className="pt-10 pb-10">
    {info.map((piece, i) => (
        <div
          className="projCard"
          key={i}
        >
        {piece.title}
        <div className="relative p-2 aspect-square rounded-2xl" style={{width: '80%'}}>
        <Image src={piece.image} alt={piece.title} fill={true} className="object-cover p-4" />
        </div>
        </div>
      ))}
      {info.map((piece, i) => (
        <div
          className="projCard"
          key={i}
        >
        {piece.title}
        <div className="relative p-2 aspect-square rounded-2xl" style={{width: '80%'}}>
        <Image src={piece.image} alt={piece.title} fill={true} className="object-cover p-4" />
        </div>
        </div>
      ))}

      
</span>
<PURPfade2/>
  </div>
  );
}

// function next() {
//     const projElems = document.querySelectorAll("#projectItems>div");
//     let bElem = projElems[0] as HTMLElement;
//     for (var i = 0; i < projElems.length; i++) {
//       let aElem = projElems[i] as HTMLElement;
//       if (aElem.style.display != "none") {
//         aElem.style.display = "none";
//         if (i == projElems.length - 1) {
//           bElem.style.display = "block";
//           bElem.className = "fadeInFaster";
//         } else {
//           let cElem = projElems[i + 1] as HTMLElement;
//           cElem.style.display = "block";
//           cElem.className = "fadeInFaster";
//         }
//         break;
//       }
//     }
//   }