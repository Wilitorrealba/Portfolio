import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logo'>
                 <img src=".\src\assets\Queer & Women Tech Connect.png "className="logo" alt="Queer & Women in Tech Connect logo" />
      </div>
      <h1>Queer & Women in Tech Connect Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     
    </>
  )
}

export default App
