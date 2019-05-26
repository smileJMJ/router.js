var ROUTER;
(function(){
    var hostname = '';
    var status = {};
    var getStatus;

    getStatus = function(page){
        switch(page){
            case ('MAIN' || '' || undefined):
                status = {
                    name: 'MAIN',
                    url: '/index.html',
                    tit: '메인',
                    cb: function(){
                        if(arguments[0] === 'destroy') MAIN.destroy();
                        else MAIN.init();
                    }
                };
                break;

            case 'LIST':
                status = {
                    name: 'LIST',
                    url: '/list',
                    tit: '리스트',
                    cb: function(){
                        if(arguments[0] === 'destroy') LIST.destroy();
                        else LIST.init();
                    }
                };
                break;

            case 'VIEW':
                status = {
                    name: 'VIEW',
                    url: '/view',
                    tit: '콘텐츠',
                    cb: function(){
                        if(arguments[0] === 'destroy') VIEW.destroy();
                        else VIEW.init();
                    }
                };
                break;

            default:
                break;
        }
    };

    ROUTER = {
        init: function(){
            var self = this;
            self.go('MAIN');

            if(status.url !== undefined){
                window.onpopstate = function(e){
                    self.go(e.state);
                }
            }
        },
        go: function(page){
            if(status.url !== undefined) {
                status.cb('destroy');
            }
            getStatus(page);
            history.pushState(status.name, status.tit, hostname + status.url);
            status.cb();

        }
    };
})();