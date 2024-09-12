import Image from "next/image";

import Link from "next/link";
import Home from "../page";
import Navbar from "../Navbar";
import LOT from "../layOnTop";

// const text = ["hey text", "another one", "more content", "aehlaewkhfakjefh"];

type Data = {
  title: string;
  status: string;
  description: string;
  image: string;
  link: string;
};

const info: Data[] = [
  {
    title: "Filipino Student Association",
    status: "Member (2022-2024) | Halo-Halo Committee (2023)",
    description:
      "Participated in cultural events and community service. Was part of the graphic and decorations team as well as a dancer for the annual Halo-Halo Event that features a mix of cultural and modern dances of the Philippines and around the world.",
    image: "/fsaLogo.png",
    link: "",
  },
  {
    title: "RAFB Software Engineering Group",
    status: "Robins Air Force Base 402 SWEG | Intern (Summers 2022-2024)",
    description:
      "Worked as a software engineering intern for the Robins Air Force Base. Created a runway validity application and a Raspberry Pi smart car (see more in Projects). Projected to work on web development in a more professional setting in the upcoming 2024 summer.",
    image: "/sweg.jpg",
    link: "",
  },
  {
    title: "VGDev",
    status: "Member (2023-2024)",
    description:
      "Helped in the creation of two games so far: From Nava and BonBon. Collaborated with programming, music, design, and writer teams spanning 30+ team members.",
    image: "/vgdev.jpg",
    link: "",
  },
  {
    title: "Yellow Jacket Marching Band",
    status: "Member (2022)",
    description:
      "Performed as a flute player of the Georgia Tech Marching Band, one of the premier marching bands in the state of Georgia",
    image: "/mb.jpg",
    link: "",
  },
];

export default function Involvements() {
  return (
    <main
      className="flex min-h-screen flex-row justify-between p-24 font-mono"
      // style={{
      //   background:
      //     "radial-gradient(circle at 10% 20%, rgba(47, 27, 37, 0.2), transparent 50%), radial-gradient(circle at 60% 70%, rgba(81, 0, 143, 0.2), transparent 50%), radial-gradient(circle at 90% 50%, rgba(81, 0, 143, 0.2), transparent 50%)",
      // }}
    >
      <div
        className=" border rounded-3xl about2-content flex justify-between items-centered m-12 mr-20 ml-20 pb-8 mt-10" // removed ripple
        style={{
          borderColor: "rgba(83, 56, 87)",
          borderWidth: "5px",
          backgroundColor: "rgba(15, 17, 12)",
        }}
      >
        <div>
          <p className="text-gray-400 pl-10 text-2xl text-left pt-10 rounded-3xl w-full">
            What I&apos;ve been a part of
          </p>

          <p className="text-left text-7xl font-bold p-5 rounded-3xl w-full pl-10">
            Involvments
          </p>
          <br></br>

          <ul className="ml-3.5 border-gray-800 border-t-2 gap-4">
            {info.map((piece, i) => (
              <li
                className="grid grid-cols-5 border-b-2 border-gray-800 gap-2 rounded"
                key={i}
              >
                <h2 className="p-10 pl-5 border-r-2 border-purple-950 text-3xl">
                  {piece.title}
                </h2>
                <p className="pl-5 pt-10 pb-10 col-span-3">
                  <span className="text-purple-400">{piece.status}</span>
                  <br></br>
                  {piece.description}
                </p>

                <div className="relative p-2 aspect-square h-40 rounded-2xl">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill={true}
                    className="object-cover p-4 m-5"
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
