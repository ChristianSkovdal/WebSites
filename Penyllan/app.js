Ext.application({
    name: 'Penyllan',

    extend: 'Ext.app.Application',

    launch: function () {

    },

    requires: [
        'Penyllan.view.Main'
    ],

    mainView: 'Penyllan.view.Main'
});
