import Link from "next/link";
import XG2 from "./xg2";

export default function XavGen() {
  return (
    <div className=" m-5 relative flex flex-col place-items-center align-middle">
      <div
        className={` font-bold bgFadeIn text-center`}
        style={{
          borderRadius: "25vw",
          fontSize: "min(15vw, 5rem)",
          paddingRight: "10vw",
          paddingLeft: "10vw",
          paddingTop: "5vh",
          paddingBottom: "5vh",
        }}
      >
        <Link href="https://www.linkedin.com/in/xavier-genio">

          <span style={{ whiteSpace: "nowrap" }}>
            {Array.from("Xavier Genio".replace(/ /g, "\u00a0")).map(
              (letter, index) => (
                <span
                  key={index}
                  className="jump xgFormat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              )
            )}
          </span>
          {/* <XG2 /> */}
        </Link>
      </div>
    </div>
  );
}
