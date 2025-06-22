import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

export default function useTelegram() {
  const [user] = useState(WebApp.initDataUnsafe.user || {});

  useEffect(() => {
    WebApp.ready();
  }, []);

  return { user, WebApp };
}
