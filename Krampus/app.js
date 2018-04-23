function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Ext.application({
    name: 'Krampus',

    extend: 'Ext.app.Application',

    launch: function () {

    },

    requires: [
        'Krampus.view.Main'
    ],

    mainView: 'Krampus.view.Main'
});
