import '../scss/styles.scss';
import $ from 'jquery';
import playAudio from './audio';

let volume = 0.3;

jQuery(function() {
    $('body').on("keypress", function(event) {
        let key = String.fromCharCode(event.which);
        playAudio(key.toUpperCase(), volume);
    });
    $('.btn').on("click", function() {
        playAudio($(this).attr('id'), volume);
    })
    
})