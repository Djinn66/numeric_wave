$(function () {
    $("#btn_societe").click(function () {
        hideAll();
        showOne($("#societe"));
    });
    $("#btn_moi").click(function () {
        hideAll();
        showOne($("#moi"));
    });
    $("#btn_ecole").click(function () {
        hideAll();
        showOne($("#ecole"));
    });
});

function hideAll() {
    $('.collapse').collapse('hide');

}

function showOne(item) {
    $(item).collapse('show');
}