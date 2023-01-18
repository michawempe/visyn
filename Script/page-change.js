let index = 0;
let indexStatus = 1;

const page0 = document.querySelector("#page0");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");

const navigation = document.querySelector("#navigation");

// 0

const visynCrkr = document.querySelector("#visynCrkr");
const text1 = document.querySelector("#output-text1");
const text2 = document.querySelector("#output-text2");
const text3 = document.querySelector("#output-text3");
const some = document.querySelector(".some");
const los = document.querySelector("#losGehts");
const outputBox = document.querySelector(".output-box");
const inputButtons = document.querySelector("#input-buttons");

const visynCharakterBriefing = document.querySelector("#visyn-charakter-briefing");

//1

//2
var readSpeed = 60;

document.querySelector("#iconTextSend").addEventListener("click", () => {
  if (index == 2) {
    pageChange();
  }
});
document.querySelector("#iconVoiceSend").addEventListener("click", () => {
  if (index == 2) {
    pageChange();
  }
});

document.querySelector("#indexStatus").innerHTML = indexStatus + " von ~15";

visynCharakterBriefing.style.animation = "readAnimation 4s linear 2 alternate";

function pageChange() {
  if (index == 0) {
    indexStatus = 2;
    document.querySelector("#indexStatus").innerHTML = indexStatus + " von ~15";
    los.classList.toggle("closed");

    setTimeout(function () {
      text1.classList.toggle("closed");
      text2.classList.toggle("closed");
      some.classList.toggle("closed");
      outputBox.style.right = "20px";
      outputBox.style.bottom = "90px";
      visynCharakterBriefing.style.animation = "none";
      visynCharakterBriefing.offsetHeight; /* trigger reflow */
      visynCharakterBriefing.style.animation = null;
      visynCharakterBriefing.style.animation = "readAnimation 4s linear 3 alternate";
    }, 1000);

    outputBox.classList.toggle("visynanimateoutwide");
    outputBox.style.position = "absolute";

    index++;
  } else if (index == 1) {
    indexStatus = 3;
    document.querySelector("#indexStatus").innerHTML = indexStatus + " von ~15";
    page0.classList.toggle("closed");
    page1.classList.toggle("closed");
    inputButtons.classList.remove("grayedOutFirstPages");

    setTimeout(function () {
      text2.classList.toggle("closed");
      text3.classList.toggle("closed");
      outputBox.style.right = "calc(50vw - 381.4px)";
      outputBox.style.bottom = "calc(50vh - 70px)";
      inputButtons.style.right = "calc(50vw - 381.4px)";
      inputButtons.style.bottom = "calc(50vh - 150px)";

      visynCharakterBriefing.style.animation = "none";
      visynCharakterBriefing.offsetHeight; /* trigger reflow */
      visynCharakterBriefing.style.animation = null;
      visynCharakterBriefing.style.animation = "readAnimation 4s linear 2 alternate";
    }, 1000);

    outputBox.classList.toggle("visynanimateinwide");
    inputButtons.classList.toggle("textareaanimatein");

    index++;
  } else if (index == 2) {
    navigation.children[0].classList.remove("outline");
    navigation.children[1].classList.add("outline");

    document.querySelector(".output-box-wide").classList.add("closed");

    indexStatus = 4;
    document.querySelector("#indexStatus").innerHTML = indexStatus + " von ~15";
    page1.classList.toggle("closed");
    page2.classList.toggle("closed");

    inputButtons.style.right = "20px";
    inputButtons.style.bottom = "15px";
    outputBox.style.position = "block";

    document.querySelectorAll(".grayedOutFirstPages").forEach(function (item) {
      item.style.opacity = "100%";
    });
    index++;
    textRead();
  }
}

var indexText = 0;

function textRead() {
  document.querySelector("#content-board-part" + indexText.toString()).classList.toggle("closed");

  var delay = 0;

  document.documentElement.scrollTop = window.innerHeight * indexText;

  const contentBox = document.querySelector("#output-box-content");

  if (indexText != 0) {
    document.querySelector("#output-text-content" + (indexText.toString() - 1)).classList.add("closed");
  }

  var childCount = document.querySelector("#output-text-content" + indexText.toString()).childElementCount;
  var childCountLoad = document.querySelector("#output-load-content" + indexText.toString()).childElementCount;

  if (indexText == 0) {
    navigation.children[0].classList.remove("outline");
    navigation.children[1].classList.add("outline");
  } else if (indexText == 1) {
    navigation.children[1].classList.remove("outline");
    navigation.children[2].classList.add("outline");
  } else if (indexText == 3) {
    navigation.children[2].classList.remove("outline");
    navigation.children[3].classList.add("outline");
  }

  for (i = 0; i < childCount + childCountLoad; i++) {
    const outBox = document.querySelector("#output-text-content" + indexText.toString());
    const outBoxLoad = document.querySelector("#output-load-content" + indexText.toString());

    const content = document.querySelector("#content-board-part" + indexText.toString());

    const childrenBoxLoad = outBoxLoad.children[i];
    const childrenBox = outBox.children[i - childCountLoad];

    const visynCharakter = document.querySelector("#visyn-charakter");

    visynCharakter.style.animation = "readAnimation 4s linear infinite alternate";

    if (childCountLoad != 0) {
      content.style.visibility = "hidden";

      if (i == 0) {
        contentBox.classList.toggle("visynanimateout");
        contentBox.classList.toggle("visynanimatein");
        setTimeout(function () {
          contentBox.classList.toggle("beforevisynanimation");
        }, 1900);
      }

      if (i < childCountLoad) {
        setTimeout(function () {
          childrenBoxLoad.style.display = "block";

          for (j = 0; j < childCountLoad; j++) {
            if (outBoxLoad.children[j].getBoundingClientRect().top < 100) {
              outBoxLoad.children[j].style.display = "none";
            }
          }
        }, delay);

        delay = delay + childrenBoxLoad.textContent.length * readSpeed;
        /* if (i < outBoxLoad.childElementCount - 1) {
        setTimeout(function () {
          childrenBoxLoad.style.display = "none";
        }, delay);
      } */
      }

      if (i == childCountLoad) {
        setTimeout(function () {
          outBoxLoad.classList.toggle("closed");
          contentBox.classList.toggle("visynanimatein");
          contentBox.classList.toggle("beforevisynanimation");
          contentBox.classList.toggle("visynanimateout");
          content.style.visibility = "visible";
        }, delay);
      }
    }

    if (i >= childCountLoad) {
      setTimeout(function () {
        childrenBox.style.display = "block";

        for (j = 0; j < childCount; j++) {
          if (outBox.children[j].getBoundingClientRect().top < 100) {
            outBox.children[j].style.display = "none";
          }
        }
      }, delay);

      delay = delay + childrenBox.textContent.length * readSpeed;

      if (i == childCount + childCountLoad - 1) {
        setTimeout(function () {
          visynCharakter.style.animation = "readAnimation 4s linear 1 alternate";
        }, Math.round(delay / 4000) * 4000);
      }
    }
    if (indexText > 3 && indexText < 15) {
      document.querySelector("#iconVoice").classList.add("closed");
      document.querySelector("#iconTextSend").classList.remove("closed");
      document.querySelector("#left-inputSide").value = "";
      if (i == childCount + childCountLoad - 1) {
        setTimeout(function () {
          document.querySelector("#left-inputSide").value = document.querySelector("#output-answer-content" + (indexText.toString() - 5)).innerHTML;
        }, delay)
      }
    } else {
      document.querySelector("#left-inputSide").value = "";
    }
  }



  indexText++;
  indexStatus++;
  document.querySelector("#indexStatus").innerHTML = indexStatus + " von ~15";
}

function textReadButton() {
  if (index == 3 && indexText > 3) {
    textRead();
  }
}

document.querySelector("#left-inputSide").onkeyup = function (e) {
  e = e || event;
  if (e.keyCode === 13) {
    textReadButton();
    if (index == 2) {
      pageChange();
    }
  }
  return true;
};
