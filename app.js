// lOADER
//SVG LOGO

$('html, body').css({
  overflow: 'hidden',
  height: '100%'
});

var bar = new ldBar(".myItem1",{
  "type": 'fill'
});
bar.set(
  100,
  false
);

$(window).on('load', function() {

  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  })

  $("#loading").addClass("loader-hidden");
});





// NAVBAR SCROLL HIDE-SHOW
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#navbarArtha").css({
      top: '0'
    });
  } else {
    $("#navbarArtha").css({
      top: '-60px'
    });
  }
  prevScrollpos = currentScrollPos;
}

// PROJECT - GIFs
$(document).ready(function() {
  $("#artha-project1-all").hover(
    function() {
      $("#artha-project1-img").attr("src", "images/project/uhuy.gif");
    },
    function() {
      $("#artha-project1-img").attr("src", "images/project/gunung.jpg");
    }
  );

  $("#artha-project2-all").hover(
    function() {
      $("#artha-project2-img").attr("src", "images/project/uhuy.gif");
    },
    function() {
      $("#artha-project2-img").attr("src", "images/project/langit.jpg");
    }
  );

  $("#artha-project3-all").hover(
    function() {
      $("#artha-project3-img").attr("src", "images/project/uhuy.gif");
    },
    function() {
      $("#artha-project3-img").attr("src", "images/project/gunung2.jpg");
    }
  );
});
