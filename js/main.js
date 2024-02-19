
/*$(document).ready(function(){
    $(".card_box").on('click', function() {
        $(".card_box").toggle('is-flipped');
    });
});

$(document).ready(function(){
    $(".card_box").on('click', function() {
        $(this).addClass('is-flipped');
        $(this).toggle();
    });
});*/

window.onload = function(e){
    var cards = document.querySelectorAll('.card_box');
    cards.forEach(function(e) {
        e.addEventListener('click', function() {
            e.classList.toggle('is-flipped');
        });
    });

    var items = document.querySelectorAll('.nav-link');
    items.forEach(function(i) {
        i.addEventListener('click', function() {
            $(".navbar-collapse").collapse('hide');
        });
    });
}


function vl4dem0l3() {
	var email = "c2ltb25lLnBpcmFuaTkzQGdtYWlsLmNvbQo=";
	console.log(atob(email));
}


$(document).ready(function () {
    $(".step").on("click", function () {
        $(this).parent().find(".substep").animate({up: "+=50", height: "toggle"}, 350)
    });
});


var beerpwn =
	' _                                              \n' +
	'| |__    ___   ___  _ __  _ __ __      __ _ __  \n' +
	'| \'_ \\  / _ \\ / _ \\| \'__|| \'_ \\\\ \\ /\\ / /| \'_ \\ \n' +
	'| |_) ||  __/|  __/| |   | |_) |\\ V  V / | | | |\n' +
	'|_.__/  \\___| \\___||_|   | .__/  \\_/\\_/  |_| |_|\n' +
	'                         |_|                    \n';
console.log('%c ' + beerpwn, 'background: green; color: white; display: block;');
console.log('%c What are you doing here????', 'background: green; color: white; display: block;');
