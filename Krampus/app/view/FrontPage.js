Ext.define('Krampus.view.FrontPage', {
    extend: 'Ext.Container',
    xtype: 'frontpage',

    requires: [
        'Krampus.tile.FrontPageTile'
    ],

    //cls: 'frontpage',

    layout: {
        type: 'vbox',
    },


});
