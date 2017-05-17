// ref: http://codepen.io/chriscoyier/pen/dpBMVP 
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.not('[id="toggle-courses"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
    ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// Toggle show/hide 
function toggleCourses() {
  var change = document.getElementById("toggle-courses");
  if (change.innerHTML == "[ show courses ]")
  {
    change.innerHTML = "[ hide courses ]";
    document.activeElement.blur(); // remove focus so hvr-underline-from-center clears
  }
  else {
    change.innerHTML = "[ show courses ]";
    document.activeElement.blur(); 
  }
}

// ref: https://codepen.io/rdallaire/pen/apoyx
// Scroll to top
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);      // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);     // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {    // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0                          // Scroll to top of body
  }, 500);
});
