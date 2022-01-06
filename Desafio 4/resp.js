$(document).ready(function () {
    $(".menu-hamburguer").click(function () {
        if ($(".container_2").is( ":hidden" )) {
            $(".container_2").show();
        } else {
            $(".container_2").hide();
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
