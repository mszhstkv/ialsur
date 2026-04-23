import WebApp from '@twa-dev/sdk';

export const initTelegramApp = () => {
  WebApp.ready();
  WebApp.expand();

  document.documentElement.style.setProperty('--tg-theme-bg-color', WebApp.backgroundColor);
  document.documentElement.style.setProperty(
    '--tg-theme-text-color',
    WebApp.themeParams.text_color || '#000000',
  );

  return WebApp;
};

export { WebApp };
