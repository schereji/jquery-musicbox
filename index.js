$(document).ready( function() {
    'use strict';

    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
      
    $("#instrument" ).on('mousedown','.box', function(){
       //disable highlighting
       $("#instrument" ).disableSelection();
       //onClick() note play
       playMusic.apply(this);
       $("#instrument" ).on( 'mouseenter','.box', playMusic); 
        
        //on mouseup, deregister event
        $("body").mouseup(function(){
            $("#instrument" ).off('mouseenter');
        });

    });

    function playMusic(){
        var a = $(this).attr('id');
        var note = $('#' + a + 'Audio')[0];
        //note.css('border-color','white');
        // Revert audio back to 0th sec. on additional click
        note.currentTime = 0;
        // This plays the audio file.
        note.play();
    }   

});