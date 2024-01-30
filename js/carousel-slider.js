function moveToSelected(element) {
  var nextOrPrev = $(element).attr('id');
  var parent = $(element).parent().parent('.carousle-section');
  if (nextOrPrev == "next") {
    if (parent.find(".selected").next().length == 0) {
      var selected = parent.find(".selected").first();
    } else {
      var selected = parent.find(".selected").next();
    }
  } else if (nextOrPrev == "prev") {
    if (parent.find(".selected").prev().length == 0) {
      var selected = parent.find(".selected").last();
    } else {
      var selected = parent.find(".selected").prev();
    }
  } else {
    var selected = element;
  }

  var next = parent.find(selected).next();
  var prev = parent.find(selected).prev();

  parent.find(selected).removeClass().addClass("selected");

  if (next.length == 0) {
    parent.find(".carousel-slider-setting div").first().removeClass().addClass("next");
  } else {
    parent.find(next).removeClass().addClass("next");
  }

  if (prev.length == 0) {
    parent.find(".carousel-slider-setting div").last().removeClass().addClass("prev");
  } else {
    parent.find(prev).removeClass().addClass("prev");
  }
}

$(document).keydown(function (e) {
  var parent = $(".carousel-slider-setting");
  switch (e.which) {
    case 37: // left
      moveToSelected('prev');
      break;

    case 39: // right
      moveToSelected('next');
      break;

    default: return;
  }
  e.preventDefault();
});

$('.carousel-slider-setting div').click(function () {
  moveToSelected($(this));
});