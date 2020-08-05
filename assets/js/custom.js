(function ($) {

    function findStickyItem() {
        var lastWidget = $("aside.widget:last");
        if (lastWidget.length) {
            var lastItem = lastWidget.find("ins.adsbygoogle:last");
            if (lastItem.length) {
                return lastItem;
            }
        }

        return null;
    }

    var sticky = function () {
        var stickyItem = findStickyItem();
        if (stickyItem) {
            // var options = {
            //     offset: {
            //         top: 10,
            //         bottom: $('footer').height() + 64*2
            //     }
            // }
            // $.stickysidebarscroll(stickyItem, options);

            stickyItem.stick_in_parent({
                parent: ".sidebar",
                spacer: ".widget",
            });
        }
    };

    var unSticky = function() {
        var stickyItem = findStickyItem();
        if (stickyItem) {
            // $(window).unbind('scroll resize orientationchange load', stickyItem);
            stickyItem.trigger("sticky_kit:detach");
        }
    }

    function isDesktopSite() {
        var w = $(window).width() / parseFloat($("body").css("font-size"));
        return w >= 64.063;
    }

    $(function () {
        // $(window).resize(function() {
        //     if (isDesktopSite()) {
        //         sticky();
        //     }
        //     else {
        //         unSticky();
        //     }
        // });

        // if (isDesktopSite()) {
        //     sticky();
        // }

        // var sidebar = new StickySidebar('.sidebar', {
        //     topSpacing: 10,
        //     bottomSpacing: $('footer').height() + 64*2,
        //     innerWrapperSelector: 'aside.sponsors'
        //   });

        if (isDesktopSite()) {
            $('.sidebar').height($('article').height()) + 747;

            $('.widget>ins:last').css({
                'posistion': 'sticky',
                'position': '-webkit-sticky',
                'top': 10,
                'bottom': $('footer').height() + 64*2
            });
        }
    });
})(jQuery);
