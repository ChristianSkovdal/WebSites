Ext.define('Krampus.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        controller: {
        },
        component: {
            'frontpage': {
                initialize: 'initFrontpage'
            },
            'main': {
                initialize: 'initMain'
            },
            'postittile': {
                initialize: 'initPostitTile',
                tileclick: 'tileClick'
            },
            'frontpagetile': {

            },
        },
    },

    tileStack: [
        {
            xtype: 'actiontile'
        },
        {
            userCls: 'socmed-fb',
            xtype: 'htmltile',
            html: 'adsfdwfs'
            //html: '<div style="fp-tile socmed-fb"></div>'
        },
        {
            xtype: 'htmltile',
            html: '<div style="socmed-insta"></div>'
        },
        {
            xtype: 'htmltile',
            html: '<div style="socmed-tw"></div>'
        },
        {
            xtype: 'htmltile',
            html: '<div style="text-align:center;">Events</div>'
        }
    ],

    actionButtonClick(btn) {
        let tile = btn.up('frontpagetile');
        Ext.ComponentQuery.query('frontpagetile')
            .filter(t => t != tile)
            .forEach(t => {

                Ext.defer(() => {
                    t.setActiveItem({

                        xtype:'beertile'
    
                    });
                }, rand(100,500))

        });
    },

    tileClick(parent) {

        let cfg = this.tileStack.shift();
        parent.setActiveItem(cfg);
    },

    initPostitTile(cmp) {
        let style = '';
        if (cmp.getParent().centerTile) {
            style = `background-image: url(img/logo.jpg);background-size: contain;`;
        }
        else {
            style = `background-image: url(img/tiles/${rand(1, 28)}.jpg);background-size: cover;`;
        }
        cmp.setStyle(style);
        cmp.el.on('click', function (e) {
            this.fireEvent('tileclick', cmp.getParent());
        }, cmp);
    },

    initMain(cmp) {
        const m = 30;
        let width = window.innerWidth - 2 * m;
        let height = window.innerHeight - 2 * m;
        let size = Math.min(width, height);

        cmp.add({
            xtype: 'frontpage',
            width: size,
            height: size,
            margin: m
        });
    },

    initFrontpage(cmp) {

        const margin = 5;
        let size = cmp.getWidth();

        let max = 5;
        if (size <= 768) {
            max = 3;
        }

        for (var i = 0; i < max; i++) {

            let col = cmp.add({
                xtype: 'container',
                flex: 1,
                layout: 'hbox'
            });

            let dims = (size - max * margin * 2) / max

            for (var j = 0; j < max; j++) {

                let center = (i == (max - 1) / 2) && (j == (max - 1) / 2);

                let r = rand(-10, 10);
                let m = rand(-10, 10);

                col.add({
                    centerTile: center,
                    xtype: 'frontpagetile',
                    margin: m,
                    shadow: true,
                    width: dims,
                    height: dims,
                    style: `transform: rotate(${r}deg);`,
                });

            }
        }

        //Ext.defer(() => this.flipAll(), 5000);
    }

});
