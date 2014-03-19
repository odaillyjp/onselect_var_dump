chrome.contextMenus.create({
  title: "var_dump を挿入",
  contexts: ["selection"],
  documentUrlPatterns: ["http://sandbox.onlinephpfunctions.com/"],
  onclick: function() {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  }
});
