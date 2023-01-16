var addCss = document.createElement("link");
addCss.rel = "stylesheet";
addCss.type = "text/css";
addCss.href = "Style/zoom.css";
let toggleButton = true;

function zoom() {
  if (toggleButton) {
    toggleButton = false;
    document.getElementsByTagName("head")[0].appendChild(addCss);
    toggleArrow();
  } else {
    toggleButton = true;
    document.getElementsByTagName("head")[0].removeChild(addCss);
    toggleArrow();
  }
}

for (i = 0; i < 16; i++) {
  const clickListener = document.querySelector("#content-board-part" + i.toString());
  clickListener.addEventListener("click", (event) => {
    if (document.getElementsByTagName("head")[0].contains(addCss)) {
      toggleButton = true;
      document.getElementsByTagName("head")[0].removeChild(addCss);
      clickListener.scrollIntoView();
      toggleArrow();
    }
  });
}

function toggleArrow() {
  document.body.classList.toggle("body-zoom");
  for (j = 0; j < 15; j++) {
    document.querySelector("#arrow" + j.toString()).classList.toggle("closed");
  }
}
