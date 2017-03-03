(function ($) {
    $(document).ready(function () {
        $("a.showMenu").on("click", function (e) {
            menu = $("ul.menu");
            if (menu.is(":hidden")) {
                menu.slideDown(400);
            } else {
                menu.slideUp(400);
            }
        });
    });
})(jQuery);