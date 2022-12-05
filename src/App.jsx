import { useEffect, useState } from "react";
import Square from "./components/organism/Square";
import Triangle from "./components/organism/Triangle";
import Circle from "./components/organism/Circle";
import Title from "./components/atoms/Title/Title";

function App() {
  const [triangleSize, setTriangleSize] = useState(129);
  const [triangleColor, setTriangleColor] = useState("#ff8000");
  const [squareSize, setSquareSize] = useState(130);
  const [squareColor, setSquareColor] = useState("#6495ED");
  const [circleSize, setCircleSize] = useState(131);
  const [circleColor, setCircleColor] = useState("#8FBC8F");

  useEffect(() => {
    triangleSize === 130 &&
      squareSize === 130 &&
      circleSize === 130 &&
      alert("todas las figuras tienen el mismo tamaño");
  }, [triangleSize, squareSize, circleSize]);

  return (
    <div>
      <Title>Ejercicio useState useEffect</Title>
      <Triangle
        triangleSize={triangleSize}
        setTriangleSize={setTriangleSize}
        triangleColor={triangleColor}
        setTriangleColor={setTriangleColor}
      />
      <Square
        squareSize={squareSize}
        setSquareSize={setSquareSize}
        squareColor={squareColor}
        setSquareColor={setSquareColor}
      />
      <Circle
        circleSize={circleSize}
        setCircleSize={setCircleSize}
        circleColor={circleColor}
        setCircleColor={setCircleColor}
      />
    </div>
  );
}

export default App;
