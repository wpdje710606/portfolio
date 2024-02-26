const nextslideSection = (setTheSection) => {
  var slideSections = $(setTheSection).find('.slideSection');
  // Get currentActive class
  var currentActive = $(setTheSection).find('.currentActive');
  // Remove currentActive class
  currentActive.removeClass('currentActive');
  // Check for next slideSection
  if (currentActive.next().length) {
    // Add currentActive to next sibling
    currentActive.next().addClass('currentActive');
  } else {
    // Add currentActive to start
    slideSections.eq(0).addClass('currentActive');
  }
  setTimeout(() => currentActive.removeClass('currentActive'));
};

const prevslideSection = (setTheSection) => {
  var slideSections = $(setTheSection).find('.slideSection');
  // Get currentActive class
  const currentActive = $(setTheSection).find('.currentActive');
  // Remove currentActive class
  currentActive.removeClass('currentActive');
  // Check for prev slideSection
  if (currentActive.prev().length) {
    // Add currentActive to prev sibling
    currentActive.prev().addClass('currentActive');
  } else {
    // Add currentActive to last
    slideSections.eq(slideSections.length - 1).addClass('currentActive');
  }
  setTimeout(() => currentActive.removeClass('currentActive'));
};

// Button events
$('.next-button').on('click', function(e) {
  var setTheSection = $(this).parents('.col-md-12');
  nextslideSection(setTheSection);
});

$('.prev-button').on('click', function(e) {
  var setTheSection = $(this).parents('.col-md-12');
  prevslideSection(setTheSection);
});