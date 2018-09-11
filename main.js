$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 800, function(){
      window.location.hash = hash;
      });
    }
  });
});

$(function(){
  var hash = location.hash.replace('#','');
  if(hash != ''){
    location.hash = '';
  }
});

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});


$("#toggle").on("click", function(){
  $("body").css("overflow", "auto");
});


window.sr = ScrollReveal();

sr.reveal('#home h3', {
  duration:700,
})
sr.reveal('#home h4', {
  delay:200,
  duration:700,
}, 200)

sr.reveal('#about h4', {
  origin:'bottom',
  duration:2000,
})
sr.reveal('#about p', {
  origin:'bottom',
  duration:2000,
})
sr.reveal('#about a', {
  delay:400
})
      
sr.reveal('#skills #language-left', {
  origin:'left',
  duration:2500,
})
sr.reveal('#skills #language-right', {
  origin:'right',
  duration:2500,
})
sr.reveal('#skills #tools-left', {
  origin:'left',
  duration:2500,
})
sr.reveal('#skills #tools-right', {
  origin:'right',
  duration:2500,
})
sr.reveal('#skills #character .col-left', {
  origin:'left',
  duration:2000,
})
sr.reveal('#skills #character .col-right', {
  origin:'right',
  duration:2000,
})

sr.reveal('#experience .row', {
  duration:2000,
}, 400)
      
sr.reveal('#projects div', {
  viewFactor: .01,
  duration:1300,
}, 400)

sr.reveal('#contact #form-field', {
  duration:2000
})
sr.reveal('#contact #social', {
  duration:2000
})
sr.reveal('#contact button', {
  delay:600
})