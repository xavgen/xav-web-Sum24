'use client';
import Image from "next/image";

import Link from "next/link";
import Home from "../page";
import Navbar from "../Navbar";
import FootNote from "../footNote";
import LOT from "../layOnTop";
import "../CSS_Folder/twoBorder.css";
import PROJitems from "./projectItems";
import "./proj.css";
import PURPfade from "./purpFade";
import XGLogo from "../xgLogo";


export default function Projects() {
  return (
    <main
      className="flex min-h-screen flex-col justify-between font-mono" // changing flex-row to flex-col doesn't seem to change anything
      // style={{
      //   background:
      //     "radial-gradient(circle at 10% 20%, rgba(47, 27, 37, 0.2), transparent 50%), radial-gradient(circle at 60% 70%, rgba(81, 0, 143, 0.2), transparent 50%), radial-gradient(circle at 90% 50%, rgba(81, 0, 143, 0.2), transparent 50%)",
      // }}
    >
      {/* .................... Find out how to make this another .tsx file someday ...................... */}

      <div className="outsideOfBorder fontMilky">
        <div className="pageBorderOutside">
          <div className="ripple pageBorderInside">My Projects</div>
        </div>
      </div>

      {/* ............................................................................................... */}

      <div className="bgTrans"></div>
      
      <div className="swapBackground fontMilky purpFormat ">
      {/* <PURPfade/> */}
          <PROJitems />
      </div>

      {/* <div
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
      </div> */}
      {/* <XGLogo/> */}
      <LOT />
    </main>
  );
}
