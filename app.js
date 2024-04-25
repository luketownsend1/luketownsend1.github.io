


var textArray = ["Cars", "Code", "CAD", "Robotics", "Photography", "Graphics Design"];
var currentIndex = 0;
var paragraph = document.getElementById("likedThingsCarousel");

  function changeText() {
      paragraph.style.opacity = 0;
      setTimeout(function() {
          paragraph.textContent = textArray[currentIndex];
          currentIndex = (currentIndex + 1) % textArray.length;
          paragraph.style.opacity = 1;
      }, 1000); // Wait for the transition to complete before changing the text
  }

  setInterval(changeText, 5000);