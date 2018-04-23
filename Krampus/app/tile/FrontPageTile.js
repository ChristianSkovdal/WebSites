Ext.define('Krampus.tile.FrontPageTile.', {
    extend: 'Ext.Container',
    xtype: 'frontpagetile',

    flex: 1,

    requires: [
        'Krampus.tile.PostitTile',
        'Krampus.tile.HtmlTile',
        'Krampus.tile.ActionTile',       
        'Krampus.tile.BeerTile',       
    ],

    layout: {
        type: 'card',
        animation: {
            type: 'flip',
        }
    },

    items: [
        // {
        //     xtype: 'logotile'
        // },
        {
            xtype: 'postittile',
        },

    ]
});
