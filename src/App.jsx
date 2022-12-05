import React from 'react'
import { Title } from './components/atoms/Title'
import { Span } from './components/atoms/Span'
import { colors } from './styles/colors'

function App() {
  return (
    <div>
      <Title>Titulo</Title>
      <Span>hello world</Span>
      <Span color="red">hello world red</Span>
      <Span color={colors.secondary}>hello world secondary</Span>
    </div>
  )
}

export default App
