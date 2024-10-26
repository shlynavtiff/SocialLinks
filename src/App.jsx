import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialLinks from './page/SocialLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SocialLinks/>
    </>
  )
}

export default App
