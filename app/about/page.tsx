'use client';

import Image from "next/image";
// import Navbar from "../old (delete after fin)/Navbar";
import Link from "next/link";
import Home from "../page";
import "../CSS_Folder/twoBorder.css";
import "../CSS_Folder/about.css";

import LOT from "../layOnTop";
import ABTitems from "./aboutItems";



import React, { useState } from "react";

// type AboutItems = {
//   item: string;
// };

// const items: AboutItems[] = [

// ];



export default function About() {
  return (
    <main
      className="flex min-h-screen flex-col justify-between font-mono"
      id="isNavOpen"
      style={{ overflow: "hidden" }}
    >
      {/* .................... Find out how to make this another .tsx file someday ...................... */}

      <div className="outsideOfBorder fontMilky">
        <div className="pageBorderOutside">
          <div className="ripple pageBorderInside">So who am I?</div>
        </div>
      </div>

      {/* ............................................................................................... */}

      <div className="bgTrans"></div>

      <div className="swapBackground fontMilky purpFormat">
        <div className="colAbt flex flex-col justify-center items-center align-middle">
          {/* <Image
            src="/me_1.jpg"
            alt="Picture of Xavier Genio"
            className="object-cover meImage"
            width={400}
            height={400}
            style={{borderRadius: '5vh'}}
          ></Image> */}
          <span
            className="meImage"
            style={{ border: "5px double var(--blue-color)", padding: "5px" }}
          >
            <img
              src="/me_1.jpg"
              alt="Picture of Xavier Genio"
              className="object-cover "
              style={{ borderRadius: "5vh" }}
            ></img>
          </span>
        </div>

        <ABTitems />

      </div>

      <LOT />
    </main>
  );
}

