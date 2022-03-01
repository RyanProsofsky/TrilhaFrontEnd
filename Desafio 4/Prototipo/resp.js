$(document).ready(function () {
    $(".menu-hamburguer").click(function () {
        if ($(".container_2").is( ":hidden" )) {
            $(".container_2").show();
        } else {
            $(".container_2").hide();
        }
    })

});