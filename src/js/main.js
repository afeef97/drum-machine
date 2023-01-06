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
    });

    $(document).on('input', '#volume-slider', function() {
        volume = $(this).val();
    })

    $('body').on("keypress", function(event) {
        let key = String.fromCharCode(event.which).toUpperCase();
        $('#'+key).css("background-color", "yellow");
        
        if(audioMap.hasOwnProperty(key)) {
            playAudio(audioMap[key][0], volume);
            $(".display").empty();
            $(".display").append("<p>" + audioMap[key][1] + "</p>");
        }  
    });

    $('body').on("keyup", function(event) {
        let key = String.fromCharCode(event.which).toUpperCase();
        $('#'+key).css("background-color", "rgba(236, 236, 231, 0.637)");
    });

    $('.btn').on("mousedown", function() {
        let key = $(this).attr('id').toUpperCase();
        $('#'+key).css("background-color", "yellow");

        if(audioMap.hasOwnProperty(key)) {
            playAudio(audioMap[key][0], volume);
            $(".display").empty();
            $(".display").append("<p>" + audioMap[key][1] + "</p>");
        }
    });

    $('.btn').on("mouseup", function() {
        let key = $(this).attr('id').toUpperCase();
        $('#'+key).css("background-color", "rgba(236, 236, 231, 0.637)");
    });
    
})