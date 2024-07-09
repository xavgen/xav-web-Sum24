"use client";

// type Item = {
//   description: string;
//   image: string;
// };

// const info: Item[] = [
//   {
//     description: "Hello, I am Xavier Genio",
//     image: "",
//   },
//   {
//     description: "I am a programmer and web developer based in Atlanta, GA",
//     image: "",
//   },
//   {
//     description:
//       "I'm majoring in Computer Science at the Georgia Institute of Technology",
//     image: "",
//   },
//   {
//     description: ":)",
//     image: "",
//   },
// ];

export default function ABTitems() {
  return (
    <span>
      <div id="aboutItems" className="colAbt2">
        <div> Hello, I am Xavier Genio </div>
        <div style={{ display: "none" }}>
          I am a programmer and web developer based in Atlanta, GA
        </div>
        <div style={{ display: "none" }}>
          I'm majoring in Computer Science at the Georgia Institute of
          Technology
        </div>

        {/* {info.map((piece, i) => (
          <span>
            <div key={i} style={{display: 'none'}}>{piece.description}</div>
          </span>
        ))} */}
      </div>
      <button onClick={() => next()}>Next</button>
    </span>
  );
}

function next() {
  const abtElems = document.querySelectorAll("#aboutItems>div");
  let bElem = abtElems[0] as HTMLElement;
  for (var i = 0; i < abtElems.length; i++) {
    let aElem = abtElems[i] as HTMLElement;
    aElem.className = "fadeInFaster";
    if (aElem.style.display != "none") {
      aElem.style.display = "none";
      if (i == abtElems.length - 1) {
        bElem.style.display = "block";
      } else {
        let cElem = abtElems[i + 1] as HTMLElement;
        cElem.style.display = "block";
      }
      break;
    }
  }
}
