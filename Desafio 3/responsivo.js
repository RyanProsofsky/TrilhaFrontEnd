$(document).ready(function () {
    $(".menu-hamburguer").click(function (event) {




        // CONDICAO = VERIFICAR A PROPRIEDADE ATUAL DO DISPLAY

        //SE O MENU-HAMBURGUER ESTIVER VISIVEL AO CLICKAR
        // - EXIBIR O MENU
        if ($(".menu").is(":visible")) {
            // console.log("esta visivel",$(".menu").is(":visible"))
            //hide = display none
            $(".menu").hide();
        //SENAO
        // - O MENU FICARÁ VISÍVEL
    } else {
        // console.log("esta visivel",$(".menu").is(":visible"))
        //show = display block
        $(".menu").show();
        
    }
})
});
