import Link from "next/link";
import Image from "next/image";

export default function SkillsPoP() {
  return (
    <main>
      <section className="z-10 max-w-7xl w-full p-8 m-1 justify-between text-sm lg:flex flex-col grid grid-cols-1">
        <div
          className="ripple border rounded-3xl about2-content flex justify-between items-centered m-15 mr-20 ml-20 pb-8"
          style={{
            borderColor: "rgba(83, 56, 87)",
            borderWidth: "5px",
            backgroundColor: "rgba(15, 17, 12)",
          }}
        >
          <div className="text-2xl text-left pt-8 pl-10 rounded-3xl">
            <span className="text-gray-400">Skills</span>

            <p className="text-4xl text-left p-5 pl-1 rounded-3xl w-full font-extrabold">
              There are many skills that I have learned...
            </p>
            <br></br>
            <p className="text-3xl text-left p-5 pl-1 rounded-3xl w-full">
              Check out each one that made each project possible!
            </p>

            <Link
              className="group rounded-lg border border-transparent px-5 py-4"
              href="/skills"
            >
              <span
                className={`mb-3 text-2xl font-semibold text-center group-hover:jumpOnce group-hover:text-purple-400 text-gray-400`}
              >
                <br></br>
                {Array.from("My Skills".replace(/ /g, "\u00a0")).map(
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
              </span>
            </Link>
          </div>
          <Image
            src="/my_art_1.png"
            alt="TIMMY"
            className="w-1/3 items-center object-cover m-20 rounded-3xl"
            width={1000}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}
