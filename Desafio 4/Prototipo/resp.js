$(document).ready(function () {
    $(".menu-hamburguer").click(function () {
        if ($(".menu").is( ":hidden" )) {
            $(".menu").show();
        } else {
            $(".menu").hide();
        }
    })

});


// $(window).resize(function () {
//     if ($(document).innerWidth() < 376) {
//         $(".menu").show(); 
//     } else {
//         $(".menu").hide();
//     }

// });
