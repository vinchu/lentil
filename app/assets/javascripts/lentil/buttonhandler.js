function buttonhandler() {

    $("body").on("click", ".like-btn, .flag-confirm", function(e) {
        button = $(this);
        imageId = $(".fancybox-wrap, .image-show").attr("id");

        if (!$(button).is(".already-clicked")) {
            url = $(button).attr("href");
            $.post(url, function() {
                $(button).addClass("already-clicked");
                $("#" + imageId + " .text-overlay").find(".initial-state").addClass("already-clicked");
            });
        }

        if ($(button).is(".like-btn")) {
            $("#" + imageId + " .like-btn").toggle();
        } else if ($(button).is(".flag-confirm")) {
            $("#" + imageId + " .flag-btn.initial-state").remove();
            $("#" + imageId + " .flag-btn.secondary-state").show();
            $('.modal').modal('hide');
        }
        e.preventDefault();
    });

    // Show flag modal
    $("body").on("click", ".flag-btn", function (e) {
        var imageId = $(".fancybox-wrap, .image-show").attr("id");
        var modalId = "#myModal-" + imageId;
        $(modalId).modal('show');
    });
}
