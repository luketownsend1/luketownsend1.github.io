


var textArray = ["Cars", "Code", "CAD", "Robotics", "Photography", "Graphics Design", "Animation", "Cats"];
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

  function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    var navLinks = document.querySelectorAll('.navcard a');
    pages.forEach(function(page) {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
    navLinks.forEach(function(link) {
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
  }