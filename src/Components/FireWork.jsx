import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

function FireWork() {
  return <Fireworks 
        autorun={{ speed: 3 , duration:4000}}
      />;
}

export default FireWork;