// Get the words element
const words = document.querySelector('.words');
const headerSection = document.querySelector('.header-section');
const mainSection = document.querySelector('.main-section');
const introductionSection = document.querySelector('.introduction-section');

// Wait 22 seconds and then remove the words element and display the image
setTimeout(() => {
  words.parentNode.removeChild(words);
  const img = document.createElement('img');
  img.src = 'images/introduction-graphic-white.svg';
  img.alt = 'Introduction Graphic';
  img.classList.add('introduction-graphic-setting');
  const animation02 = document.querySelector('.name');
  animation02.appendChild(img);
  setTimeout(function () {
    function fadeOut(el) {
      var opacity = 1; // Initial opacity
      var interval = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.1;
          el.style.opacity = opacity;
        } else {
          clearInterval(interval); // Stop the interval when opacity reaches 0
          el.style.display = 'none'; // Hide the element
        }
      }, 50);
    }
    fadeOut(introductionSection);
  }, 2200);
  setTimeout(function () {
    function fadeIn(el) {
      var opacity = 0; // Initial opacity
      el.style.display = 'block';
      if (el.style.opacity == 0) { // Check if the element is already visible
        el.style.opacity = 1; // Set the opacity to 1 if it's not already visible
        el.style.display = 'block'; // Show the element
      }
      var interval = setInterval(function () {
        if (opacity < 1) {
          opacity += 0.2;
          el.style.opacity = opacity;
        } else {
          clearInterval(interval); // Stop the interval when opacity reaches 1
        }
      }, 20);
    }
    fadeIn(headerSection);
    fadeIn(mainSection);
  }, 2500);
}, 21500);