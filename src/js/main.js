import '../scss/styles.scss';
import $ from 'jquery';
import playAudio from './audio';
import audioMap from "./audioMap";
import responsive from './responsive';

let volume = 0.3;

jQuery(function() {
    responsive();

    $(window).on("resize", function() {
        responsive();
    })

    $('body').on("keypress", function(event) {
        let key = String.fromCharCode(event.which).toUpperCase();
        
        if(audioMap.hasOwnProperty(key)) {
            playAudio(audioMap[key][0], volume);
            $(".display").empty();
            $(".display").append("<p>" + audioMap[key][1] + "</p>");
        }  
    });

    $('.btn').on("click", function() {
        let key = $(this).attr('id').toUpperCase();

        if(audioMap.hasOwnProperty(key)) {
            playAudio(audioMap[key][0], volume);
            $(".display").empty();
            $(".display").append("<p>" + audioMap[key][1] + "</p>");
        }  
    })
})