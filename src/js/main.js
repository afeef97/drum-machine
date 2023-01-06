import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import $, { event } from 'jquery';
import playAudio from './audio';

jQuery(function() {
    $('body').on("keypress", function(event) {
        let key = String.fromCharCode(event.which);
        playAudio(key.toUpperCase());
    });
    $('.btn').on("click", function() {
        playAudio($(this).attr('id'));
    })
})