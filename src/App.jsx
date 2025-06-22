import { useState, useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date())
  const [weather, setWeather] = useState('')

  useEffect(() => {
    WebApp.ready()

    const handleClick = () => {
      if (!WebApp.isPopupOpened) {
        WebApp.showAlert('Вы нажали кнопку!')
      }
    }

    WebApp.MainButton.setText('Нажми меня')
    WebApp.MainButton.onClick(handleClick)
    WebApp.MainButton.show()

    WebApp.BackButton.onClick(() => WebApp.close())
    WebApp.BackButton.show()

    const interval = setInterval(() => setTime(new Date()), 1000)

    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          if (data.current_weather) {
            setWeather(`${data.current_weather.temperature}°C`)
          }
        })
        .catch(() => setWeather('Не удалось получить погоду'))
    })

    return () => {
      WebApp.MainButton.offClick(handleClick)
      WebApp.BackButton.offClick()
      clearInterval(interval)
    }
  }, [])

  const tg = WebApp.initDataUnsafe
  const user = tg.user || {}
  const userName = `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'Гость'

  return (
    <div className="container">
      <div className="profile">
        <img className="avatar" src={user.photo_url} alt="avatar" />
        <div className="info">
          <div className="name">{userName}</div>
          <div className="counter">Нажали: {count}</div>
        </div>
      </div>

      <button className="action" onClick={() => setCount(c => c + 1)}>Нажми меня</button>

      <div className="time">{time.toLocaleString()}</div>

      <div className="weather">{weather}</div>
    </div>
  )
}
