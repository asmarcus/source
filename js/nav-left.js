$(document).ready(function(){
  $(".navigation li a").on("click", function(e){
    e.preventDefault();
    var hrefval = $(this).attr("href");
    
    if(hrefval == "#notepad") {
      var distance = $('#mainpage').css('left');

      console.log(distance);
      
      if(distance == "auto" || distance == "0px") {
        $(this).addClass("open");
        openSidepage()
        setTimeout(
          function() {
            $('.button-js').css('display','block')
          }, 500);
      } 
      else {
        $('.button-js').css('display','none')
          setTimeout(
            function() {
              closeSidepage();
            }, 400);
      }
    }
  }); // end click event handler

  $(".navigation li a").on("click", function(e){
    e.preventDefault();
    var hrefval = $(this).attr("href");
    
    if(hrefval == "#openNode") {
      var distance = $('#mainpage').css('left');

      console.log(distance);
      
      if(distance !== "auto" || distance !== "0px") {
        $(this).addClass("open");
        openSidepage();
        setTimeout(
          function() {
            $('.button-js').css('display','none');
            //do something special
        }, 800);
        setTimeout(
          function() {
            $('.baby-button-js').css('display','block')
            //do something special
        }, 400);
      } else {
        closeSidepage();
      }
    }
  }); // end click event handler
  
  $(".navigation li a").on("hover", function(){
    var classval = $(this).hasClass("hovertrigger");
    
    if(classval == true) {
      var distance = $('#mainpage').css('left');
      
      if(distance == "auto" || distance == "0px") {
        $(this).addClass("open");
        openSidepage();
      }
    }
  }); // end hover event handler
  
  $("#closebtn").on("click", function(e){
    e.preventDefault();
    closeSidepage();
  }); // end close button event handler


  function openSidepage() {
    $('#mainpage').animate({
      left: '45%'
    }, 400, 'easeOutBack');
    $('#content').animate({
      width: '-=50%'}, 400, 'easeOutBack')
  }
  
  function closeSidepage(){
    $(".navigation li a").removeClass("open");
    $('#mainpage').animate({
      left: '0px'
    }, 400, 'easeOutQuint');
    $('#content').animate({
      width: '100%'}, 400, 'easeOutQuint')  
  }
}); 