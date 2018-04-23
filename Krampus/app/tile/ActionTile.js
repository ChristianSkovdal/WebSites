Ext.define('Krampus.tile.ActionTile', {
    extend: 'Ext.Container',
    xtype: 'actiontile',

    layout: 'vbox',

    style: 'background: black;',

    defaults: {
        xtype: 'button',
        handler: 'actionButtonClick',
        flex:1
    },

    items: [
        {
            bind: {
                text: 'ABOUT'
            }
        },
        {
            bind: {
                text: 'EVENTS'
            }
        },
        {
            bind: {
                text: 'BEERS'
            }
        },
        {
            bind: {
                text: 'CONTACT'
            }
        },
    ]
});
