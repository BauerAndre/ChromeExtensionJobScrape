// send the page title as a chrome message
// chrome.runtime.sendMessage(
//   document.querySelector(".top-card-layout__title").innerText
// );
// chrome.runtime.sendMessage(
//   document.querySelector(".topcard__org-name-link").innerText
// );
// chrome.runtime.sendMessage(document.URL);

chrome.runtime.sendMessage({
  content: document.querySelector(".top-card-layout__title").innerText,
  type: "m1",
});
chrome.runtime.sendMessage({
  content: document.querySelector(".topcard__org-name-link").innerText,
  type: "m2",
});
chrome.runtime.sendMessage({ content: document.URL, type: "m3" });

//  document.querySelector('.top-card-layout__title').innerText
//  document.querySelector('.topcard__org-name-link').innerText
//  document.URL
