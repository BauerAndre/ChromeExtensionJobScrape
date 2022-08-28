// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener("load", function (evt) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: "payload.js",
  });
});

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

//  // submit the sign in form
//   $('#login').click(function(event) {
//     event.preventDefault();
//     var email = $('#email').val();
//     var password = $('#password').val();

//     $.ajax({
//       method: "POST",
//       url: "http://www.jobjob.pro/users/sign_in?password=" + password + "&email=" + email,
//       dataType: "json",
//       success: function(data, status, xhr) {
//         localStorage.setItem('accessToken', xhr.getResponseHeader('access-token'));
//         localStorage.setItem('expiry', xhr.getResponseHeader('expiry'));
//         localStorage.setItem('tokenType', xhr.getResponseHeader('token-type'));
//         localStorage.setItem('uid', xhr.getResponseHeader('uid'));
//         localStorage.setItem('client', xhr.getResponseHeader('client'));

//         $('#showSignIn').fadeOut('slow', function() {
//           $('#showSignIn').addClass('invisible');
//           $('#jobForm').fadeIn('medium');
//           $('#jobForm').removeClass('invisible');
//           $('#email').val("");
//           $('#password').val("");
//         });
//       },
//       error: function(data) {
//         $('.error').fadeIn(300).delay(1500).fadeOut(400);
//       }
//     });
//     event.stopPropagation();
//   });

//   // submit the job form
//   $('#createJob').click(function(event) {
//     event.preventDefault();
//     data = {title: $('#title').val(), company_name: $('#company').val(), url: $('#url').val()};

//     $.ajax({
//       method: "POST",
//       url: "http://www.jobjob.pro/users/create_from_chrome.json",
//       dataType: "json",
//       data: JSON.stringify(data),
//       beforeSend: function(xhr) {
//         xhr.setRequestHeader("access-token", localStorage.accessToken);
//         xhr.setRequestHeader("accessToken", localStorage.accessToken);
//         xhr.setRequestHeader("expiry", localStorage.expiry);
//         xhr.setRequestHeader('token-type', localStorage.tokenType);
//         xhr.setRequestHeader('tokenType', localStorage.tokenType);
//         xhr.setRequestHeader("uid", localStorage.uid);
//         xhr.setRequestHeader("client", localStorage.client);
//         xhr.setRequestHeader("Content-Type", "application/json");
//       },
//       success: function() {
//         $('.success').fadeIn(300).delay(1500).fadeOut(400);
//         $('#title').val("");
//         $('#company').val("");
//         $('#notes').val("");
//       },
//       error: function(data) {
//         $('.failure').fadeIn(300).delay(1500).fadeOut(400);
//       }
//     });
//     event.stopPropagation();
//   });

$("#login").click(function () {
  var email = $("#email").val();
  var password = $("password").val();

  $.post("http://www.jobjob.pro/users/sign_in", {
    email: email,
    password: password,
  }),
    function (response) {};
});
