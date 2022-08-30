const job = {
  title: document.querySelector(
    ".top-card-layout__title, .jobs-unified-top-card__job-title"
  ).innerText,
  url: document.URL,
  company: document.querySelector(
    ".topcard__org-name-link, .jobs-unified-top-card__company-name"
  ).innerText,
};
console.log(job);
chrome.runtime.sendMessage(job, function (response) {
  console.log(response);
});
