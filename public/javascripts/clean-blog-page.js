(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
/**************************************************************************
  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            //$('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          //$('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }
 **************************************************************************/

/**********************************************/
let yellowlinks = document.getElementsByClassName('yellowlink');
for (var i=0; i< yellowlinks.length; i++) {
  if (yellowlinks[i].getAttribute('href'))
    yellowlinks[i].style.backgroundColor = 'yellow';
}


let bluelinks = document.getElementsByClassName('bluelink');
for (var i=0; i< bluelinks.length; i++) {
  if (bluelinks[i].getAttribute('href'))
    bluelinks[i].style.backgroundColor = 'lightblue';
}

console.log('********js check h5  ');
let profileh5 = document.getElementById('profileh5');
if (profileh5 != null) {

console.log(profileh5.textContent);
let usage = profileh5.textContent;
if (usage.trim() == 'Profile') {
  document.getElementById('inputUsername').disabled = 'true';
}
}


/**********************************************/

})(jQuery); // End of use strict

