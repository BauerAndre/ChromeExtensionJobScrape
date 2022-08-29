// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener("load", function (evt) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: "payload.js",
  });
});

// document.getElementById("pagetitle").innerHTML = message;

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
  if (message.type == "m1") {
    document.getElementById("title").innerHTML = message.content;
  }
  if (message.type == "m2") {
    document.getElementById("company").innerHTML = message.content;
  }
  if (message.type == "m3") {
    document.getElementById("url").innerHTML = message.content;
  }

  // document.getElementById("pagetitle").innerHTML = message;
});

// event to on click submit
// $("#login").click(function () {
//   var email = $("#email").val();
//   var password = $("password").val();

//   // Making ajax call after receive
//   $.post("http://www.jobjob.pro/users/sign_in", {
//     email: email,
//     password: password,
//   });
//   $.post("http://www.jobjob.pro/jobs", {
//     title: title,
//     company: company,
//     url: url,
//   });
// });
chrome.runtime.onMessage.addListener(function (message) {
  if (message.type == "m1") {
    title = message.content;
  }
  if (message.type == "m2") {
    company = message.content;
  }
  if (message.type == "m3") {
    url = message.content;
  }
  if (message.type == "m4") {
    document = message.content;
  }

  function sendJob() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    var myInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-User-Email": email,
        "X-User-Password": password,
      },
      body: JSON.stringify({
        job: { user_id: 5, title: title, company: company, url: url },
      }),
    };

    fetch("http://localhost:3000/api/v1/jobs", myInit)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  console.log(document.getElementById("send"));
  // document.getElementById("send").addEventListener("click", (event) => {
  //   console.log("inside event listener");
  sendJob();
  // });
});
