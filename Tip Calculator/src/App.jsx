import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Tip from './components/Tip';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        backgroundImage:
          "url('https://html.sammy-codes.com/images/background.jpg')",
        border: '3px solid black',
        margin: '30px',
        // backgroundColor: 'plum',
      }}
    >
      <Tip />
    </div>
  )
}

export default App
