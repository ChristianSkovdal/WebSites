Ext.define('Krampus.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'Krampus.view.MainController',
        'Krampus.view.MainModel',
        'Krampus.view.FrontPage'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'main',
   
    layout: {
        type: 'hbox',
        align: 'middle',
        pack: 'center'
    },

    items: [


    ]
});
