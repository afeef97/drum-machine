import $ from 'jquery';

export default function responsive() {
    if($(window).width() <= 575) {
        $('.drum-pads').removeClass("col-7");
        $('.drum-pads').addClass("col-10");
        $('.drum-pads').css({'border-bottom-left-radius': '0'});
    
        $('.panel').removeClass("col-3");
        $('.panel').addClass("col-10");
        $('.panel').css({'border-bottom-left-radius': '1rem'});
    
        $('.drum-machine').removeClass('rounded-5');
        $('.drum-machine').addClass('rounded-2');
        $('.drum-machine').css({'width': '240px', 'height': '430px'});
    }
    else {
        $('.drum-pads').removeClass("col-10");
        $('.drum-pads').addClass("col-7");
        $('.drum-pads').css({'border-bottom-left-radius': '1rem'});
    
        $('.panel').removeClass("col-10");
        $('.panel').addClass("col-3");
        $('.panel').css({'border-bottom-left-radius': '0'});
    
        $('.drum-machine').removeClass('rounded-2');
        $('.drum-machine').addClass('rounded-5');
        $('.drum-machine').css({'width': '700px', 'height': '300px'});
    }
}


