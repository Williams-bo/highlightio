// plugins/highlightPlugin.js

import { H } from 'highlight.run';

export default ({ app }) => {
  const apiKey = 'lgxj7n4d'; // Replace with your actual API key

  H.init(apiKey, {
    environment: 'production',
    version: 'commit:abcdefg12345',
    networkRecording: {
      enabled: true,
      recordHeadersAndBody: true,
      urlBlocklist: [
        "https://www.googleapis.com/identitytoolkit",
        "https://securetoken.googleapis.com",
      ],
    },
  });

  app.$highlight = H;
};
