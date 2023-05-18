// slids (slick)
$(document).ready(function(){
    $('.slids-box').slick({
      dots:true,
      slidesToShow:2,
      slidesToScroll:1,
      
    });
  });
////////////////////////////////////////////////////////////////////////
//// play and pause video
  function videotoggle(){
    let vid = document.querySelector("video");
    if(vid.paused){
        vid.play()
    }
    else{
        vid.pause()
    }
  }
  $('.play').click(function(){
    videotoggle();
    $('.play').css("display","none")
    $('.pause').css("display","block")
  })
  $('.pause').click(function(){
    videotoggle();
    $('.pause').css("display","none")
    $('.play').css("display","block")

  })
////////////////////////////////////////////////////////////////////////
 
