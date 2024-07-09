import Image from "next/image";
// import Navbar from "../old (delete after fin)/Navbar";
import Link from "next/link";
import Home from "../page";
import Navbar from "../Navbar";
import LOT from "../layOnTop";

export default function Art() {
  return (
    <main
      className="flex min-h-screen flex-col justify-between p-24 font-mono"
      // style={{
      //   background:
      //     "radial-gradient(circle at 10% 20%, rgba(47, 27, 37, 0.2), transparent 50%), radial-gradient(circle at 60% 70%, rgba(81, 0, 143, 0.2), transparent 50%), radial-gradient(circle at 90% 50%, rgba(81, 0, 143, 0.2), transparent 50%)",
      // }}
    >
      <LOT />
      
    </main>
  );
}
