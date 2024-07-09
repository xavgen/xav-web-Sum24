"use client";

import "./CSS_Folder/navbar.css";

export default function NavMobile() {
  return (
    <span
      className="navMobile flex flex-col justify-center text-center align-middle fontMilky"
      id="navMobile"
    >
      {/* EDIT THIS BUTTON: className (img and button), and naming  */}
{/* 
      <button onClick={closeNavMobile} className="navButtMob">
        {" "}
        <img
          src="/dropdownWHITE.png"
          alt="button"
          className="navImgResDD"
        ></img>
        <i className="fa fa-caret-down"></i>
      </button> */}

      {/* ........................................................ */}

      <a href="../" className="navDesignMob">
        {" "}
        {/* nav-button */}
        Home
      </a>
      <a href="../about" className="navDesignMob">
        About
      </a>
      <a href="../projects" className="navDesignMob">
        Projects
      </a>
      <a href="../involvements" className="navDesignMob">
        Involvement
      </a>
      <a href="../art" className="navDesignMob">
        Art
      </a>
    </span>
  );
}

// let isOpen = 0;

// function closeNavMobile() {
//   const openNav = document.getElementById("navMobile");
//   const disableScroll = document.getElementById("isNavOpen");
//   if (openNav != null && disableScroll != null && isOpen == 0) {
//     disableScroll.style.overflow = "scroll";
//     openNav.style.display = "none";
//     isOpen = 0;
//   } else if (openNav != null && disableScroll != null) {
//     // openNav.className = "grid text-center lg:grid-rows-5 fadeIn navButtMob";
//     disableScroll.style.overflow = "hidden";
//     openNav.style.display = "flex";
//     isOpen = 0;
//   }
// }
