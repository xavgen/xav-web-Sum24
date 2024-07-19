import XGLogo from "./xgLogo";
import Navbar from "./Navbar";
import FootNote from "./footNote";
import NavMobile from "./navMobile";

export default function LOT() {
  return (
    <span style={{zIndex: '2'}}>
      <NavMobile />
      <XGLogo />
      <Navbar />
      <FootNote />
    </span>
  );
}
