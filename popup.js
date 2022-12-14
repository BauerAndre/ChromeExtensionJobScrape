// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener("load", function (evt) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: "payload.js",
  });
});
var job;
chrome.runtime.onMessage.addListener(function (message) {
  job = message;
  console.log(message);
  document.getElementById("company").innerHTML = job.company;
  document.getElementById("title").innerHTML = job.title;
  document.getElementById("logo_url").src = job.logo_url;
});

function sendJob() {
  chrome.storage.sync.get(["token"], function (result) {
    const token = result.token;
    console.log(token);
    var myInit = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        job: job,
      }),
    };
    // fetch("http://localhost:3000/api/v1/jobs", myInit)
    fetch("http://www.jobjob.pro/api/v1/jobs", myInit)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // todo update display on popup
      });
  });
}

document.getElementById("send").addEventListener("click", (event) => {
  console.log("inside event listener");
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: "payload.js",
  });
  const sender = document.getElementById("add-job");
  const confirm = document.querySelector("h4");
  sender.style.display = "none";
  confirm.style.display = "inline";
  sendJob();
});

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  var myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  };

  // fetch("http://localhost:3000/api/v1/auth/login", myInit)
  fetch("http://www.jobjob.pro/api/v1/auth/login", myInit)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      chrome.storage.sync.set(data, function () {
        console.log("Value is set to " + data);
        document.getElementById("showSignIn").style.display = "none";
      });
    });
}

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("inside event listener");
  login();
});

chrome.storage.sync.get(["token"], function (result) {
  if (result.token) {
    document.getElementById("showSignIn").style.display = "none";
  }
});
