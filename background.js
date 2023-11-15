
console.log("aaa");

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'X-Frame-Options') {
              details.requestHeaders.splice(i, 1);
              break;
            }
          }
          console.log("ssss");
          return {requestHeaders: details.requestHeaders};
    },
    {urls: ["*://www.jordanmlu.nl/*"]},
    ["blocking", "extraHeaders"]
  );