function initialize() {
  titleText = document.getElementById("Title");
  startButton = document.getElementById("Start");
  charImg = document.getElementById("character");
  story = document.getElementById("dialogue");
  leftArrow = document.getElementById("left");
  leftArrow.style.display = "none";
  rightArrow = document.getElementById("right");
  rightArrow.style.display = "none";
  charImg.style.display = "none";
  story.style.display = "none";
  storyText = [
    "Where am I and what is this place? Everything feels so hazy.",
    "Oh wonderful guest, you have arrived! Please have seat here, you will be playing a game with someone quite shortly.",
    "Do you know what this place is? I am not really sure.",
    "Sorry but I am not obliged to tell you such things",
    "How come?",
    "<em>Someone else comes in</em>",
    "Such a mysterious place. Where am I?",
    "That is the person you will be playing your game with. Have a seat next to this fine young man.",
    "I just came in and I am not even sure who I am. Do you know who I am, sir?",
    "Do not ask me, I do not even know myself who I am.",
    "The both of you will be playing a game. One person will leave this room alive and the other will die. You both will have to play for your lives",
    "Stay or Leave?"
  ];
  detectiveText = [
    "Where am I and what is this place? Everything feels so hazy.",
    "Do you know what this place is? I am not really sure.",
    "How come?",
    "Do not ask me, I do not even know myself who I am.",
    "Stay or Leave?"
  ];
ringmasterText = [
    "Oh wonderful guest, you have arrived! Please have seat here, you will be playing a game with someone quite shortly.",
    "Sorry but I am not obliged to tell you such things",
    "That is the person you will be playing your game with. Have a seat next to this fine young man.",
    "The both of you will be playing a game. One person will leave this room alive and the other will die. You both will have to play for your lives"
  ];
  narratorText = ["<em>Someone else comes in</em>"];
  criminalText = [
    "Such a mysterious place. Where am I?",
    "I just came in and I am not even sure who I am. Do you know who I am, sir?"
  ];
  page = 0;
}
function startGame() {
  titleText.style.display = "none";
  startButton.style.display = "none";
  document.body.style.animation = "none";
  document.getElementById("left").style.display = "inline-block";
  document.getElementById("right").style.display = "inline-block";
  charImg.style.display = "block";
  story.style.display = "block";
  continueStory();
}
function continueStory() {
  costumeSwitch(page);
  story.innerHTML = storyText[page];
}
function pageTurner() {
   page++;
  continueStory();
}
function pageBackward() {
  page--;
  continueStory();
}
function costumeSwitch(page) {
  if (detectiveText.indexOf(storyText[page]) >= 0) {
    charImg.src = "Images/" + "Detective1.png";
  }
  if (ringmasterText.indexOf(storyText[page]) >= 0) {
    charImg.src = "Images/" + "Ringmaster.png";
  }
  if (criminalText.indexOf(storyText[page]) >= 0) {
    charImg.src = "Images/" + "Criminal1.png";
  }
  if (narratorText.indexOf(storyText[page]) >= 0) {
    charImg.src = "";
  }
}