/* Akvana site script */
var CONTACT_EMAIL = "info@akvana.in"; // confirm this address with the client

// Mark the current page in the nav and footer
(function () {
  var page = document.body.getAttribute("data-page");
  document.querySelectorAll("[data-page]").forEach(function (a) {
    if (a.tagName === "A" && a.getAttribute("data-page") === page) a.classList.add("on");
  });
})();

// Mobile menu
(function () {
  var btn = document.getElementById("burger");
  var menu = document.getElementById("menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
})();

// Contact form: opens the visitor's email app with the message filled in
(function () {
  var form = document.getElementById("form");
  if (!form) return;
  var status = document.getElementById("st");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var n = document.getElementById("n").value.trim();
    var e = document.getElementById("e").value.trim();
    var m = document.getElementById("m").value.trim();
    if (!n || !e || !m) {
      status.textContent = "Please fill in your name, email and message.";
      return;
    }
    var subject = encodeURIComponent("Enquiry from " + n);
    var body = encodeURIComponent(m + "\n\n" + n + "\n" + e);
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
    status.textContent = "Your email app should open with the message ready to send.";
  });
})();
