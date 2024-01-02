import { useEffect, useRef } from "react";
import * as p5 from "p5";

const canvasRef = useRef(null);

useEffect(() => {
  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.strokeWeight(8);
    };

    p.draw = () => {
      p.background(204);
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    };
  };

  new p5(sketch, canvasRef.current);
}, []);
