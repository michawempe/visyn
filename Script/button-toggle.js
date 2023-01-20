const textfeld = document.querySelector("#textfeld");

const iconVoice = document.querySelector("#iconVoice");
const iconTextSend = document.querySelector("#iconTextSend");
const iconVoiceSend = document.querySelector("#iconVoiceSend");

const leftButton = document.querySelector("#left-inputSide");
const rightButton = document.querySelector("#right-inputSide");

function classToggleIcon() {
  if (iconTextSend.classList == "closed") {
    iconVoice.classList.toggle("closed");
    iconVoiceSend.classList.toggle("closed");
  } else if (iconTextSend.classList != "closed" && document.querySelector("#left-inputSide").value == "") {
    iconVoice.classList.toggle("closed");
    iconTextSend.classList.toggle("closed");
  }
}

leftButton.addEventListener("focus", () => {
  if (iconTextSend.classList == "closed") {
    iconVoice.classList.toggle("closed");
    iconTextSend.classList.toggle("closed");
  }
  if (iconVoiceSend.classList != "closed") {
    iconVoiceSend.classList.add("closed");
  }
  if (iconVoice.classList != "closed") {
    iconVoice.classList.add("closed");
  }
});

const rebriefingButtons = document.querySelector("#rebriefing-buttons");
const rebriefingInterface = document.querySelector("#rebriefing-interface");

function classReBriefingOpen() {
  rebriefingButtons.classList.remove("open");
  rebriefingButtons.classList.add("closed");
  rebriefingInterface.classList.remove("closed");
  rebriefingInterface.classList.add("open");
}

function classReBriefingClose() {
  rebriefingButtons.classList.remove("closed");
  rebriefingButtons.classList.add("open");
  rebriefingInterface.classList.remove("open");
  rebriefingInterface.classList.add("closed");
}

eigenesSoMeIndex = 0
unternehmenSoMeIndex = 0

function eigenesPlusButton() {
  document.querySelector("#eigenesSoMe" + eigenesSoMeIndex.toString()).classList.toggle("closed");
  eigenesSoMeIndex++;
}

function unternehmenPlusButton() {
  document.querySelector("#unternehmenSoMe" + unternehmenSoMeIndex.toString()).classList.toggle("closed");
  unternehmenSoMeIndex++;
}