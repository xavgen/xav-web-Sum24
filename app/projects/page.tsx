'use client';

import LOT from "../layOnTop";
import "../CSS_Folder/twoBorder.css";
import PROJitems from "./projectItems";
import "./proj.css";


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
          <PROJitems />
      </div>
      <LOT />
      
    </main>
  );
}
