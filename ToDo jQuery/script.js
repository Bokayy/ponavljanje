$(function () {
    $('#input').change(function(){
            let input = $(this).val();
            $("ul").append(
                "<li> " +
                    input +
                         '<i class="fas fa-check"></i> <i class="fas fa-trash"></i></li>'
            );
            $(this).val("");
    });
});

$(function () {
    $("ul").on("click", ".fa-trash", function () {
        $(this).parent("li").fadeOut(300);
    });
});

$(function () {
    $("ul").on("click",".fa-check", function () {
        $(this).parent("li").toggleClass("checked");
    });
});