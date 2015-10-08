$(document).ready(function(){
    $(".navigation li a").on("click", function(e){
        e.preventDefault();
        var hrefval = $(this).attr("href");
    
        if(hrefval == "#notepad") {
            var distance = $('#mainpage').css('left');
           
            if(distance == "auto" || distance == "0px") {
                $(this).addClass("open");
                openPage()
                setTimeout(
                    function() {
                        $('a[href="#openNode"]').css('display','block')
                    }, 500
                );
            } 
            else {
                $('a[href="#openNode"]').css('display','none')
                $('a[href="#closeNode"]').css('display','none')
                $('.about--two').css('z-index','0')
                setTimeout(
                    function() {
                        closeAll();
                    }, 400
                );
            }
        }

        if(hrefval == "#openNode") {
            $(this).addClass("open");
            openPage();
            setTimeout(
                function() {
                    $('a[href="#closeNode"]').css('display','block')
                }, 400
            );
            setTimeout(
                function() {
                    $('.about--two').css('z-index','2')
                }, 400
            );            
        }

        if(hrefval == "#closeNode") {
            $('.about--two').css('z-index','0');
            $('a[href="#openNode"]').removeClass("open");
            closeNode() 
            setTimeout(
                function() {
                    $('a[href="#closeNode"]').css('display','none')
                }, 400
            );
        }
    }); // end click event handler

  // $(".navigation li a").on("click", function(e){
  //   e.preventDefault();
  //   var hrefval = $(this).attr("href");
    
   
  //     }
  //   }
  // }); // end click event handler
  
  $("#closebtnNote").on("click", function(e){
    e.preventDefault();
    closeAll();
    $('a[href="#openNode"]').css('display','none')
    $('a[href="#closeNode"]').css('display','none')
    $('.about--two').css('z-index','0');
  }); // end close button event handler

  $("#closebtnNode").on("click", function(e){
    e.preventDefault();
    closeNode();
    $('.about--two').css('z-index','0');
    $('a[href="#openNode"]').removeClass("open");
    $('a[href="#closeNode"]').css('display','none')
  }); // end close button event handler


  function openPage() {
    $('#mainpage').animate({
      left: '45%'
    }, 350,'easeInQuad');
    $('#content').animate({
      width: '-=50%'}, 350, 'easeInSine')
  }

  // function openNode() {
  //   $('#mainpage').css(z=)
  //   }, 400, 'easeOutBack');
  //   $('#content').animate({
  //     width: '-=50%'}, 400, 'easeOutBack')
  // }
  
  function closeAll(){
    $(".navigation li a").removeClass("open");
    $('#mainpage').animate({
      left: '0px'
    }, 350, 'easeOutQuint');
    $('#content').animate({
      width: '100%'}, 350, 'easeOutQuint')  
  }

  function closeNode(){
    $('.about--two').css('z-index','0');
    $('#content').animate({
      width: '+=50%'}, 350, 'easeOutSine')  
  }


  // function closeNode(){
  //   $('#mainpage').animate({
  //     right: '45%'
  //   }, 400, 'easeOutBack');
  //   $('#content').animate({
  //     width: '+=50%'}, 400, 'easeOutBack')  
  // }

}); 