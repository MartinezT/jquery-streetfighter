$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-hide').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-hide').hide();
        $('.ryu-still').show();
        
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-hide').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '600px');
            });
    })
    .mouseup(function(){
        $('.ryu-hide').hide();
        $('.ryu-ready').show();
    });

$(document).keydown(function(event){
     if(event.keyCode==88) {
       $('.ryu-hide').hide()
      
       $('.ryu-cool').show()
     }    
}).keyup(function(event){
    if(event.keyCode==88){
    $('.ryu-hide').hide()
    $('.ryu-still').show()

    }


})

function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.3;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
});