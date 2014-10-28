$(function() {
  loadImage();

  $("#monkey").on("click", function() {
    guess("monkey");
    return false;
  });

  $("#penguin").on("click", function() {
    guess("penguin");
    return false;
  });

});

var images = [
  {kind: "monkey", src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlaFFuiq4RSfLOiqPCohSLIJh-M-wLCWWWotE_G2A2vGmHY8V4" },
  {kind: "monkey", src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzA3NkPO5_QO57zA9Y9FliY06OUoR8bu5qrFb6FaBI4NtsgowyEeSmFfaB" },
  {kind: "monkey", src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQs-BD_zQ97Qnrfq7PrxRTt_wnbNQoxgCPNHT94Iz18TC09EKJO78zOOm3w" },
  {kind: "penguin", src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTS0nw-AnTdHYuu0DVwIrPOn7raC1BKrocaQ_YPYiPaLDkOU3Slsw" },
  {kind: "penguin", src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0qVKatgiAd_nK89K9OVl4nal4nYd6-Kj9VZvG2Zp-0rcxSlmbgQ" },
  {kind: "penguin", src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTknxHM9ZrxsOmOvobWAIdM1Eq6i7qD3-0RUG64V8TL-zzK5D_F" }
]

var correctGuesses = 0
var currentImage = 0

function loadImage() {
    if (images[currentImage] !== undefined) {
      $("#guessing-image").attr("src", images[currentImage].src);
    } else {
      completeGame();
    }
}

function guess(kind){
  if (images[currentImage].kind === kind) {
    correctGuesses += 1;
  }
  updateResults();
  updateImage();
}

function updateImage(){
  currentImage += 1;
  loadImage();
}

function updateResults(){
  $("#correct-guesses").text(correctGuesses);
}

function completeGame() {
  window.alert("Congratulations. You won " + correctGuesses + " out of " + images.length);
}
