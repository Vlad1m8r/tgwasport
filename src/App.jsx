import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk';



function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    WebApp.ready();
    console.log(WebApp);

    const handleClick = () => {
      if (!WebApp.isPopupOpened) {
        WebApp.showAlert("Вы нажали кнопку!");
      }
    };

    // Работа с MainButton
    WebApp.MainButton.setText("Нажми меня");
    WebApp.MainButton.onClick(handleClick);
    WebApp.MainButton.show();

    // Работа с BackButton
    WebApp.BackButton.onClick(() => WebApp.close());
    WebApp.BackButton.show();

    return () => {
      WebApp.MainButton.offClick(handleClick);
      WebApp.BackButton.offClick();
    };
  }, []);

  var tg = WebApp.initDataUnsafe;

  return (
    <>
      <h1>{tg.user?.first_name}</h1>
      <div className="card">
        
        <img src={tg.user?.photo_url} className="logo" alt="photo" />

        <button onClick={() => setCount((count) => count + 1)}>
          Нажал {count} раз
        </button>

      </div>
    </>
  )
}

export default App
