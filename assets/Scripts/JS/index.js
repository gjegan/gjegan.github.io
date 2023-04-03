// https://mdbootstrap.com/support/other/mobile-menu-doesnt-closehide-with-selection-2/
$(document).ready(function()
{
//    $('.navbar-nav>li>a').on('click', function(){
//        $('.navbar-collapse').collapse('hide');
//    });
    $(".collapseNavbarOnClick").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });
});