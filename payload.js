chrome.runtime.sendMessage(
  {
    title: document.querySelector(
      ".top-card-layout__title, .jobs-unified-top-card__job-title"
    ).innerText,
    url: document.URL,
    company: document.querySelector(
      ".topcard__org-name-link, .jobs-unified-top-card__company-name"
    ).innerText,
    logo_url: document.querySelector(".lazy-image").innerText,
  },
  function (response) {
    console.log(response);
  }
);
