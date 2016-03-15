$(document).ready( function() {
    'use strict';

    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
      
    $("#instrument" ).on('mousedown','.box', function(){
        //event.stopPropagation();
        playMusic.apply(this);
       $("#instrument" ).disableSelection();
       $("#instrument" ).on( 'mouseenter','.box', playMusic); 
        //on mouseup, deregister event
        $("body").mouseup(function(){
            $("#instrument" ).off('mouseenter');
        });

    });

    function playMusic(){
        var a = $(this).attr('id');
        var note =  $('#' + a + 'Audio')[0];

        // Revert audio back to 0th sec. on additional click
        note.currentTime = 0;
        
        // This plays the audio file.
        note.play();
    }   
    
   	// var bNote = document.getElementById('bAudio');

    // $('#b').mousedown(function(){
        
    //     // Revert audio back to 0th sec. on additional click
    //     bNote.currentTime = 0;
        
    //     // This plays the audio file.
    //     bNote.play();
    // });  

});