$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#nav_list").toggleClass("active");
    $("#overlay-menu").toggleClass("active");
  });

  const sections = $("section");
  const navItems = $(".nav-item");
});
