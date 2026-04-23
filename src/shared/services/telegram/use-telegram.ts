import WebApp from '@twa-dev/sdk';

export const useTelegram = () => {
  const user = WebApp.initDataUnsafe?.user || null;

  const closeApp = () => WebApp.close();
  const enableClosingConfirmation = () => WebApp.enableClosingConfirmation();
  const disableClosingConfirmation = () => WebApp.disableClosingConfirmation();

  return {
    WebApp,
    user,
    closeApp,
    enableClosingConfirmation,
    disableClosingConfirmation,
  };
};
