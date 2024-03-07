// Get the words element
const words = document.querySelector('.words');
const headerSection = document.querySelector('.header-section');
const mainSection = document.querySelector('.main-section');
const introductionSection = document.querySelector('.introduction-section');

// remove the words element and display the image
setTimeout(() => {
  words.parentNode.removeChild(words);
  const object = document.createElement('object');
  object.data = 'images/introduction-graphic-white.svg';
  object.alt = 'Introduction Graphic';
  object.type = 'image/svg+xml';
  object.classList.add('introduction-graphic-setting');
  const animation02 = document.querySelector('.name');
  animation02.appendChild(object);
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
  }, 4000);
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
  }, 4500);
}, 9980);

setTimeout(() => {
  var introWords = ['Welcome to my Portfolio!', 'I am...'],
    part,
    i = 0,
    offset = 0,
    len = introWords.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 72;
  var wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= introWords[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = introWords[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.words').text(part);
    }, speed);
  };
  wordflick();
}, 3500);