$(document).ready( function() {
    'use strict';

    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
      
    var instrument = document.getElementById('instrument');
  
    function playMusic(){
        var a = $(this).attr('id');
        var note =  $('#' + a + 'Audio')[0];

        // Revert audio back to 0th sec. on additional click
        note.currentTime = 0;
        
        // This plays the audio file.
        note.play();
    }   
    

    $("#instrument" ).on('mousedown', function(){
        //event.stopPropagation();

       $("#instrument" ).disableSelection();
       $("#instrument" ).on( 'mouseenter','.box', playMusic); 
        //on mouseup, deregister event
        $("body").mouseup(function(){
            $("#instrument" ).off('mouseenter');
        });

    });



    // // Call the cNote audio element in the HTML.
    // var cNote = document.getElementById('cAudio');
    
    // // Turn <div id= "c"> into a button that plays audio file onClick()
    // $('#c').mousedown(function(){

    //     // Revert audio back to 0th sec. on additional click
    //     cNote.currentTime = 0;
        
    //     // This plays the audio file.
    //     cNote.play();

    //     //register an event as a var
    //     var musicEventC = $(this).mouseenter(function(){
            
    //         // Revert audio back to 0th sec. on additional click
    //         cNote.currentTime = 0;
        
    //         // This plays the audio file.
    //         cNote.play();
    //     });
    //     //on mouseup, deregister event
    //     musicEventC.mouseup(function(){
    //         musicEventC.off();
    //     });

    // });

    // var dNote = document.getElementById('dAudio');

    // $('#d').mousedown(function(){
    //     var musicEventD = $(this).mouseenter(function(){
    //         // Revert audio back to 0th sec. on additional click
    //         dNote.currentTime = 0;
            
    //         // This plays the audio file.
    //         dNote.play();
    //     });

    //     musicEventD.mouseup(function(){
    //         musicEventD.off();
    //     });
    // });

    // var eNote = document.getElementById('eAudio');

    // $('#e').mousedown(function(){
    //     $(this).mouseneter(function(){
    //         // Revert audio back to 0th sec. on additional click
    //         eNote.currentTime = 0;
            
    //         // This plays the audio file.
    //         eNote.play();
    //     });
    // });

    // var fNote = document.getElementById('fAudio');

    // $('#f').mousedown(function(){
        
    //     // Revert audio back to 0th sec. on additional click
    //     fNote.currentTime = 0;
        
    //     // This plays the audio file.
    //     fNote.play();
    // });

   	// var gNote = document.getElementById('gAudio');

    // $('#g').mousedown(function(){
        
    //     // Revert audio back to 0th sec. on additional click
    //     gNote.currentTime = 0;
        
    //     // This plays the audio file.
    //     gNote.play();
    // });

   	// var aNote = document.getElementById('aAudio');

    // $('#a').mousedown(function(){
        
    //     // Revert audio back to 0th sec. on additional click
    //     aNote.currentTime = 0;
        
    //     // This plays the audio file.
    //     aNote.play();
    // });

   	// var bNote = document.getElementById('bAudio');

    // $('#b').mousedown(function(){
        
    //     // Revert audio back to 0th sec. on additional click
    //     bNote.currentTime = 0;
        
    //     // This plays the audio file.
    //     bNote.play();
    // });  

});