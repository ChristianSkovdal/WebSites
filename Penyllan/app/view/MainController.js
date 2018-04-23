Ext.define('Penyllan.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        controller: {
            'main': {
                initui: 'initMain'
            },
            // '#foo': {
            //     bar: 'onFooBar'
            // }
        },
        // component: {
        //     '#wrapper': {
        //         added: 'onInit',
        //         painted: 'onInit'

        //     }
        //},
        // store: {
        //     '#qux': {
        //         load: 'onQuxLoad'
        //     }
        // }
    },

    updateVideo(cmp) {
        function videoSize() {
            var $windowHeight = cmp.getHeight();

            var $videoHeight = $(".video").outerHeight();
            var $scale = $windowHeight / $videoHeight;

            if ($videoHeight <= $windowHeight) {
                $(".video").css({
                    "-webkit-transform": "scale(" + $scale + ") translateY(50%)",
                    "transform": "scale(" + $scale + ") translateY(50%)"
                });
            };
        }

        $(window).on(' resize', function () {
            videoSize();
        });
        videoSize();
    },

    initMain() {
        debugger;
    }
});
