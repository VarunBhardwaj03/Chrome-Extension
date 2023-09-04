chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});


chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    if (!Array.isArray(local.blocked)) {
      chrome.storage.local.set({ blocked: [] });
    }

    if (typeof local.enabled !== "boolean") {
      chrome.storage.local.set({ enabled: false });
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  const url = changeInfo.pendingUrl || changeInfo.url;
  if (!url || !url.startsWith("http")) {
    return;
  }

  const hostname = new URL(url).hostname;

  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    const { blocked, enabled } = local;
    if (Array.isArray(blocked) && enabled && blocked.find(domain => hostname.includes(domain))) {
      chrome.tabs.remove(tabId);
    }
  });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "Time's UP!") {
            //  To do something

            alert(request.data.content)
            chrome.webRequest.onBeforeRequest.addListener(
              function(details) { return {cancel: true}; },

              {urls: []
            },


              ["blocking"]
            );


        }}
)

//alerting when alarm goes off
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse)
 {
    if (request.msg === "Alarm") {
      alert(request.data.content)
    }

  }
)
