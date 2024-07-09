import Image from "next/image";

import Link from "next/link";
import Home from "../page";
import Navbar from "../Navbar";
import FootNote from "../footNote";
import LOT from "../layOnTop";

// const text = ["hey text", "another one", "more content", "aehlaewkhfakjefh"];

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
    title: "2023 Halo-Halo Event",
    description:
      "Cooperated with sponsors, layout, marketing, and executive board teams to successively host 400+ guests through food, games, and performances",
    image: "/fsa_1.jpg",
    link: "",
  },
];

export default function Projects() {
  return (
    <main
      className="flex min-h-screen flex-row justify-between p-24 font-mono" // changing flex-row to flex-col doesn't seem to change anything
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgba(47, 27, 37, 0.2), transparent 50%), radial-gradient(circle at 60% 70%, rgba(81, 0, 143, 0.2), transparent 50%), radial-gradient(circle at 90% 50%, rgba(81, 0, 143, 0.2), transparent 50%)",
      }}
    >
      <div
        className=" border rounded-3xl about2-content flex justify-between items-centered m-12 mr-20 ml-20 pb-8 mt-10" // removed ripple
        // style={{
        //   borderColor: "rgba(83, 56, 87)",
        //   borderWidth: "5px",
        //   backgroundColor: "rgba(15, 17, 12)",
        // }}
      >
        <div>
          <p className="text-gray-400 pl-10 text-2xl text-left pt-10 rounded-3xl w-full">
            What I&apos;ve been working on
          </p>

          <p className="text-left text-7xl font-bold p-5 rounded-3xl w-full pl-10">
            Projects
          </p>
          <Link
            className="group rounded-lg border border-transparent px-5 py-4"
            href="https://github.com/xavgen"
          >
            <p
              className={`p-2 text-xl font-semibold pl-10 group-hover:jumpOnce group-hover:text-purple-400 text-gray-400`}
            >
              {Array.from("My Github".replace(/ /g, "\u00a0")).map(
                (letter, index) => (
                  <span
                    key={index}
                    className="jump"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {letter}
                  </span>
                )
              )}
              &nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                -&gt;
              </span>
            </p>
          </Link>

          <ul className="ml-3.5 border-gray-800 border-t-2 gap-4">
            {info.map((piece, i) => (
              <li
                className="grid grid-cols-5 border-b-2 border-gray-800 gap-2 rounded"
                key={i}
              >
                <h2 className="p-10 pl-5 border-r-2 border-purple-950 text-3xl">
                  {piece.title}
                </h2>
                <p className="pl-5 pt-10 col-span-3">{piece.description}</p>
                <div className="relative p-2 aspect-square h-40 rounded-2xl">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill={true}
                    className="object-cover p-4"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <LOT />
    </main>
  );
}
