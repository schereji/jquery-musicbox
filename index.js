$(document).ready( function() {
      
    // Call the cNote audio element in the HTML.
    var cNote = document.getElementById('cAudio');
    
    // Turn <div id= "c"> into a button that plays audio file onClick()
    $('#c').mousedown(function(){
        
        // Revert audio back to 0th sec. on additional click
        cNote.currentTime = 0;
        
        // This plays the audio file.
        cNote.play();
    });

    var dNote = document.getElementById('dAudio');

    $('#d').mousedown(function(){
        
        // Revert audio back to 0th sec. on additional click
        dNote.currentTime = 0;
        
        // This plays the audio file.
        dNote.play();
    });

    var eNote = document.getElementById('eAudio');

    $('#e').mousedown(function(){
        
        // Revert audio back to 0th sec. on additional click
        eNote.currentTime = 0;
        
        // This plays the audio file.
        eNote.play();
    });

    var fNote = document.getElementById('fAudio');

    $('#f').mousedown(function(){
        
        // Revert audio back to 0th sec. on additional click
        fNote.currentTime = 0;
        
        // This plays the audio file.
        fNote.play();
    });

   	var gNote = document.getElementById('gAudio');

    $('#g').mousedown(function(){
        
        // Revert audio back to 0th sec. on additional click
        gNote.currentTime = 0;
        
        // This plays the audio file.
        gNote.play();
    });

   	var aNote = document.getElementById('aAudio');

    $('#a').mousedown(function(){
        
        // Revert audio back to 0th sec. on additional click
        aNote.currentTime = 0;
        
        // This plays the audio file.
        aNote.play();
    });

   	var bNote = document.getElementById('bAudio');

    $('#b').mousedown(function(){
        
        // Revert audio back to 0th sec. on additional click
        bNote.currentTime = 0;
        
        // This plays the audio file.
        bNote.play();
    });  

});