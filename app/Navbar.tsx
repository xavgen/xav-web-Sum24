"use client";

import Link from "next/link";
import Image from "next/image";
import "./CSS_Folder/navbar.css"
import xgLogo from "./xgLogo";

export default function Navbar() {
  return (
    <nav className="" >
      {/* Stupid mobile nav that is stupidly hard to fix when idk whats going on and I have no internet
          besides my phone

       <div className="navLayer navButtMob" id="showNavMob"
          style={{
            backgroundColor: "#201d2d",
            width: "100vw",
            height: "100vh",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <ul
          className="flex flex-row"
          
        >
          <li>
            <a href="../" className="">
              Home
            </a>
          </li>
          <li>
            <a href="../about" className="">
              About
            </a>
          </li>
          <li>
            <a href="../projects" className="">
              Projects
            </a>
          </li>
          <li>
            <a href="../art" className="">
              Art
            </a>
          </li>
          <li>
            <a href="../involvements" className="">
              Involvement
            </a>
          </li>
        </ul>
      </div> */}


      <span>
      <span className="navDes2" >

        <span className="navContainer fontMilky "  >
          {/* mt-4 mx-auto px-6 py-2 */}
          <span className="flex flex-row justify-center">  {/*justify-between items-center*/}
            <a href="../" className="navDesign " >
              {" "}
              {/* nav-button */}
              Home
            </a>
            <a href="../about" className="navDesign">
              About
            </a>
            <a href="../projects" className="navDesign">
              Projects
            </a>
            <a href="../involvements" className="navDesign">
              Involvement
            </a>
            <a href="../art" className="navDesign">
              Art
            </a>
          </span>
        </span>
      </span>
      </span>
    </nav>
  );
}

