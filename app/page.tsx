import Image from "next/image";
import Navbar from "./old (delete after fin)/Navbar";
import LUX from "./linksUnderXav";
// import PoP from './old (delete after fin)/PoP/PartofPage';
import XavGen from "./XavGen";
import { url } from "inspector";
import footNote from "./footNote";

export default function Home() {
  const loading = true;

  return (
    <main
      id="home"
      className="homePage flex min-h-screen flex-row justify-center items-center fontMilkyTitle"
    >
      <div
        style={{
          border: "6px double var(--light-blue-color)",
          // borderRadius: "2vw",
          backgroundColor: "rgba(32, 29, 45, .93)",
          margin: '1vh',
          padding: '5px',
          width: 'min(100%, 85%)',
        }}
      >
        <div
          style={{
            border: "2px solid var(--light-blue-color)",
            borderRadius: "min(5vw, 2rem)",
            overflow: 'hidden',
          }}
        >
          <br></br>
          <XavGen />
          <LUX />
        </div>
      </div>
      {/* </div> */}
      {/* <PoP/> */}
    </main>
  );
}
