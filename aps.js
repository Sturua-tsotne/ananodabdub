const cursor = document.querySelector(".cursor");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const Cake1 = document.querySelector(".Cake1");
const Cake2 = document.querySelector(".Cake2");
const text = document.querySelectorAll(".text");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top :" + (e.pageY - 10) + "px;left:" + (e.pageX - 10) + "px"
  );
  text1.setAttribute(
    "style",
    "top :" + (e.pageX - 40) + "px;left:" + (e.pageY - 80) + "px"
  );

  text3.setAttribute(
    "style",
    "top :" + (e.pageX + 130) + "px;left:" + (e.pageY + 130) + "px"
  );
  text4.setAttribute(
    "style",
    "top :" + (e.pageX - 20) + "px;left:" + (e.pageY + 800) + "px"
  );
});
let toggle = false;

Cake1.addEventListener("click", () => {
  Cake1.setAttribute("style", "display:none");
  Cake2.setAttribute("style", "display:block");

  var element = document.getElementById("myDIV");
  element.classList.add("mystyle");

  var texnon = document.getElementById("texnon");
  texnon.classList.add("stylenon");
  var next = document.getElementById("next");
  next.classList.add("nextopen");
});
