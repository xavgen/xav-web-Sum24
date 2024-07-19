"use client";

import Link from "next/link";
import Image from "next/image";
import "./CSS_Folder/navbar.css";

export default function XGLogo() {
  return (
    <nav className="flex flex-col">
      <Link href="https://www.linkedin.com/in/xavier-genio">
        <img
          src="/xgWebsite.png"
          alt="button"
          className="xgLogoImg navImgResXG navDes3"
        ></img>
      </Link>

      <button onClick={openNavMobile} className="navButtMob" style={{zIndex: '3'}}>

        <img
          src="/dropdownWHITE.png"
          alt="button"
          className="navImgResDD"
        ></img>
        {/* <i className="fa fa-caret-down"></i> */}
      </button>
    </nav>
  );
}

let isOpen = 0;

function openNavMobile() {
  const openNav = document.getElementById("navMobile");
  const disableScroll = document.getElementById("isNavOpen");
  if (openNav != null && disableScroll != null && isOpen == 0) {
    openNav.style.display = "flex";
    // openNav.className = "grid text-center lg:grid-rows-5 fadeIn navButtMob";
    disableScroll.style.overflow = "hidden";
    isOpen = 1;
  } else if (openNav != null && disableScroll != null && isOpen == 1) {
    openNav.style.display = "none";
    disableScroll.style.overflow = "scroll";
    isOpen = 0;
  } 
}
