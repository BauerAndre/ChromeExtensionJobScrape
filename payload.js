// send the page title as a chrome message
// chrome.runtime.sendMessage(
//   document.querySelector(".top-card-layout__title").innerText
// );
// chrome.runtime.sendMessage(
//   document.querySelector(".topcard__org-name-link").innerText
// );
// chrome.runtime.sendMessage(document.URL);

chrome.runtime.sendMessage({
  content: document.querySelector(
    ".top-card-layout__title, .jobs-unified-top-card__job-title"
  ).innerText,
  type: "m1",
});
chrome.runtime.sendMessage({
  content: document.querySelector(
    ".topcard__org-name-link, .jobs-unified-top-card__company-name"
  ).innerText,
  type: "m2",
});
chrome.runtime.sendMessage({ content: document.URL, type: "m3" });
chrome.runtime.sendMessage({ content: document, type: "m4" });

//  document.querySelector('.top-card-layout__title').innerText
//  document.querySelector('.topcard__org-name-link').innerText
//  document.URL
