new WOW().init();
var typed = new Typed(".element", {
  strings: ["FrontEnd Developer"],
  typeSpeed: 100,
  startDelay: 2200,
  smartBackSpace: true,
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  center: true,
  items: 2,
  loop: true,
  margin: 30,
});
// ////////////////////////
const btnUP = document.getElementById("btnUp");
btnUP.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const hideNave = document.getElementById("hideNav");
hideNave.addEventListener("click", () => {
  document.getElementById("navBargure1").classList.toggle("navBargure1");
  document.getElementById("navBargure2").classList.toggle("navBargure2");
  document.getElementById("navBargure3").classList.toggle("navBargure3");
  document.getElementById("ulNav").classList.toggle("ul-nav2");
});
// ////////////////////////////
function changeNavBg() {
  let x = $(window).scrollTop();
  var offset = $("#about").offset().top;
  if (x > offset - $("header").height() + 10) {
    $("header").css("background-color", "#313131");
    btnUP.classList.replace("btnupdisplay", "btnup");
  } else {
    $("header").css("background-color", "transparent");
    btnUP.classList.replace("btnup", "btnupdisplay");
  }
}
changeNavBg();
$(window).scroll(() => {
  changeNavBg();
});
// ////////////////////////
$('nav ul a[href^="#"]').click(function () {
  let lHref = $(this).attr("href");
  let offSet = $(lHref).offset().top;
  window.scrollTo({ top: offSet, behavior: "smooth" });
  $("nav ul a").removeClass("active");
  $(this).addClass("active");
});
// /////////////////////
let conSocial = true;
$("#socialbtn").click(() => {
  if (conSocial) {
    $(".socialmedia").animate({ right: "-0px" }, 800);
    $("#socialbtn").css("backgroundColor", "#f85d05");
    conSocial = false;
  } else {
    $(".socialmedia").animate({ right: "-237.8px" }, 800);
    $("#socialbtn").css("backgroundColor", "#006cc3");
    conSocial = true;
  }
});
// //////////////////////
// $(window).on("load", function () {
//   $("#loadSpinner").fadeOut(1500);
// });
// console.log($(".about-content img").height());//
// //////////////////////
let heightAbout = $(".imgcontainer img").outerHeight(true);
$(".imgcontainer").css("height", heightAbout + 25);
// let heightservices = $(".services-img").outerHeight(true);
// $(".services-img").css("margin-top", -heightservices / 2);
// $(".services-title").css("margin-bottom", heightservices / 2);
// //////////////////////
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let currentSection = ""; // store the ID of the currently visible section

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop; // retrieves the top offset position
    const sectionHeight = section.offsetHeight; // retrieves the height of the current section

    if (
      window.scrollY >= sectionTop - 50 &&
      window.scrollY < sectionTop + sectionHeight - 50
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (navLink) {
    navLink.classList.remove("active");
    if (navLink.getAttribute("href") === "#" + currentSection) {
      navLink.classList.add("active");
    }
  });
});
// //////////////////////
let sectionSkills = document.querySelector("#skills");
let spanSkills = document.querySelectorAll(".skillprogress span");
window.addEventListener("scroll", () => {
  if (window.scrollY >= sectionSkills.offsetTop - 150) {
    spanSkills.forEach(function (span) {
      span.style.width = span.dataset.width;
      document.querySelectorAll(".skillprogress span b").forEach(function (eb) {
        eb.style.visibility = "visible";
      });
    });
  }
});
// //////////////////////
const submitBtn = document.getElementById("submitbtn");
let commentArr = [];
if (localStorage.getItem("comment") !== null) {
  commentArr = JSON.parse(localStorage.getItem("comment"));
  dispalyComment();
}
submitBtn.addEventListener("click", function () {
  let nameInput = document.getElementById("floatingInput");
  let commentInput = document.getElementById("floatingTextarea2");
  let comment = {
    name: nameInput.value,
    comment: commentInput.value,
  };
  commentArr.push(comment);
  localStorage.setItem("comment", JSON.stringify(commentArr));
  dispalyComment();
  clear();
});
function dispalyComment() {
  let ele = "";
  for (let i = 0; i < commentArr.length; i++) {
    ele += `
      <div class="carousel-item active">
        <h4>
          <i class="fas fa-quote-right"></i>
        </h4>
        <div></div>
        <p>" ${commentArr[i].comment} "</p>
        <span></span>
        <h3>${commentArr[i].name}</h3>
      </div>`;
  }
  document.querySelector(".carousel-inner").innerHTML = ele;
}
function clear() {
  let nameInput = (document.getElementById("floatingInput").value = "");
  let commentInput = (document.getElementById("floatingTextarea2").value = "");
}
// //////////////////////

const root = document.querySelector(":root");
const navA = document.querySelectorAll("#ulNav a");
let darkMode = false;
$("#btnDark").click(function () {
  if (!darkMode) {
    root.style.setProperty("--black", "#f1efef");
    root.style.setProperty("--white", "#313131");
    navA.forEach(function (nava) {
      nava.style.setProperty("color", "#f85d05");
    });
    darkMode = true;
  } else {
    root.style.setProperty("--white", "#f1efef");
    root.style.setProperty("--black", "#313131");
    navA.forEach(function (nava) {
      nava.style.setProperty("color", "#f1efef");
    });
    darkMode = false;
  }
});
