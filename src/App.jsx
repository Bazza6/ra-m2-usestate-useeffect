import { useEffect, useState } from 'react'
import { Title } from './components/atoms'
import { Square, Circle, Triangle } from './components/organism'

const App = () => {
  const [triangleSize, setTriangleSize] = useState(129)
  const [triangleColor, setTriangleColor] = useState('#ff8000')
  const [squareSize, setSquareSize] = useState(130)
  const [squareColor, setSquareColor] = useState('#6495ED')
  const [circleSize, setCircleSize] = useState(131)
  const [circleColor, setCircleColor] = useState('#8FBC8F')

  useEffect(() => {
    triangleSize === squareSize &&
      squareSize === circleSize &&
      alert('todas las figuras tienen el mismo tamaño')
    triangleColor === squareColor &&
      squareColor === circleColor &&
      alert('todas las figuras tienen el mismo color')
  }, [
    triangleSize,
    squareSize,
    circleSize,
    triangleColor,
    squareColor,
    circleColor,
  ])

  return (
    <>
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
    </>
  )
}

export default App
