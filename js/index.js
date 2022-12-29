
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.main__container_aboutMe_info_paragraph').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 0.1 - (elementHeight - scrollTop) / elementHeight;
      }
    });
  });

$(window).on("load", function(){
  $(".loader-wrapper").fadeOut("slow");
  $("body").removeClass("preload_overflow"); 
});


const ENABLE_HOVER_DELAY = 500;  
let timer;
window.addEventListener('scroll', function() {
  const bodyClassList = document.body.classList;
  // clear previous timeout function
  clearTimeout(timer);
    
  if (!bodyClassList.contains('disable-hover')) {
    // add the disable-hover class to the body element
    bodyClassList.add('disable-hover');
  }
        
  timer = setTimeout(function() {
    // remove the disable-hover class after a timeout of 500 millis
    bodyClassList.remove('disable-hover');
  }, ENABLE_HOVER_DELAY);
  
}, false);