import * as React from "react"
import "./canvas.css"
import Particles from "react-tsparticles"
import particlesOptions from "./particlesjs-config.json"
import { loadFull } from "tsparticles";

import Helo from "../../svg/web_01.svg"





export function Canvas() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="container-fluid ill_01" id="wrap">
      <Particles
        init={particlesInit}
        options={particlesOptions}
        className="particle-style"
      />
      <Helo alt="株式会社スリーピース" />;
    </div>

  )
}

export default Canvas
