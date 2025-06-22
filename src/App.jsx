import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const tg = window.Telegram?.WebApp
    tg?.ready()
    setUser(tg?.initDataUnsafe?.user)
  }, [])

  return (
    <>
      <div className="profile">
        {user?.photo_url && (
          <img className="avatar" src={user.photo_url} alt="avatar" />
        )}
        <span className="username">
          {user?.username || `${user?.first_name ?? ''} ${user?.last_name ?? ''}`}
        </span>
      </div>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>нажми на меня</button>
        <p>вы нажали {count} раз</p>
      </div>
    </>
  )
}

export default App
