$(function () {
    $(".imgToBtn").click(function () {
        hideAll();
        id ="#"+ $(this).attr('id').substr(4);
        console.log(id);
        showOne(id);
    });
    $(".collapse").on('hide.bs.collapse', function () {
        $("#content").css("background-color", "white")
            .css("border-top", "none")
            .css("border-bottom", "none");
        $(".collapse").css("background", "none");
        $(".carousel").carousel(0);

    }).on('show.bs.collapse', function () {
        $("#content").css("background-color", "white")
            .css("border-top", "5px solid #041f33")
            .css("border-bottom", "2px solid #041f33");
        afficherTic($(this).attr('id'));

    }).on('shown.bs.collapse', function () {

        estMobile = window.matchMedia("only screen and (max-width: 760px)") ;
        if (estMobile.matches)
        {
            window.location.href="#"+$(this).attr('id');
        }
    });


});

function hideAll() {
    $('.collapse').collapse('hide');
}

function showOne(item) {
    $(item).collapse('show');
}

function afficherTic(item) {
    switch (item) {
        case "societe":
            _align = "left";
            break;
        case "moi":
            _align = "center";
            break;
        case "ecole":
            _align = "right";
            break;
        default:
            _align = "left";
            break;
    }
    test = "white url(img/tic.png) no-repeat " + _align + " top";
    console.log(test);
    $("#tic").css("background", test);

}

