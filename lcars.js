// document.addEventListener("touchstart", function () {}, false);

// $(window).scroll(function () {
//   var height = $(window).scrollTop();
//   if (height > 100) {
//     $(".scroll-top a").fadeIn();
//   } else {
//     $(".scroll-top a").fadeOut();
//   }
// });

// $(document).ready(function () {
//   $("#scroll-top").click(function (event) {
//     event.preventDefault();
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
//   });
// });

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var currentSection = getCurrentSection();

  // Check if scroll position is greater than 300 pixels and not in the landing page
  if (
    scrollPosition > 300 &&
    currentSection !== "hero" &&
    currentSection !== ""
  ) {
    document.querySelector(".scroll-to-top").style.display = "block";
  } else {
    document.querySelector(".scroll-to-top").style.display = "none";
  }
});

function getCurrentSection() {
  var sections = document.querySelectorAll("section");
  var currentSection = ""; // Default to empty section

  sections.forEach(function (section) {
    var rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom > 0) {
      currentSection = section.id;
    }
  });

  return currentSection;
}
