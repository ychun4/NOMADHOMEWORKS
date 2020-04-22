// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const h2 = document.querySelector("h2");

function handleMouseEnter(event) {
  h2.innerText = "MOUSE ENTERED!!";
  h2.style.color = colors[1];
}
function handleMouseLeave(event) {
  h2.innerText = "MOUSE LEAVED!!";
  h2.style.color = colors[2];
}
function handleWindowResize(event) {
  h2.innerText = "RESIZED!!";
  h2.style.color = colors[3];
}

function catchRightClick(event) {
  if (event.button == 2)
    h2.innerText = "MOUSERIGHT CLICKED!! IT WILL NOT WORKING!!";
  h2.style.color = colors[4];
}

h2.addEventListener("mouseenter", handleMouseEnter);
h2.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
document.addEventListener("mousedown", catchRightClick);
document.addEventListener("contextmenu", function() {
  event.preventDefault();
});

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handleMouseEnter,
  handleMouseLeave,
  handleWindowResize,
  catchRightClick
};
