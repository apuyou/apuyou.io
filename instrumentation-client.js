import { initBotId } from 'botid/client/core';

// Attaches BotID headers to these requests, verified with checkBotId(). Server
// actions are POSTed to the URL of the page they are called from
initBotId({
  protect: [
    {
      path: '/',
      method: 'POST',
    },
  ],
});
