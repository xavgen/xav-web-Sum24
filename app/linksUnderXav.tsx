import "./CSS_Folder/lux.css"

// These are the links under Xavier Genio on home page

type Data = {
  title: string;
  link: string;
};

// If anything is added, be sure to adjust the column size in div in LUX()
const info: Data[] = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Involvements",
    link: "involvements",
  },
  {
    title: "Art",
    link: "art",
  },
];

export default function LUX() {
  return (
    <span
      className="grid text-center lg:grid-cols-4 mb-5 mx-10 align-middle"
      style={{ whiteSpace: "nowrap" }}
    >
      {info.map((piece, i) => (
        <a href={piece.link} className="lux fontMilky bgFadeIn group" key={i}>
          <h2 className={`text-2xl lux3 font-semibold group-hover:jumpOnce`}>
            {piece.title}
            <span className="lux2 font-mono text-xl">-&gt;</span>
          </h2>
        </a>
      ))}
    </span>
  );
}
