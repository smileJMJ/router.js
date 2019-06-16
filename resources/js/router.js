/*
    각 page 별로 지우고 그리는 것은 page 모듈 안에서 관리한다.
    페이지마다 지워야할 범위가 다를 수 있음. ex) 메인-wrap을 전체 비워버림, list-header,gnb,footer 제외하고 container만 지움
*/

var ROUTER;
ROUTER = (function(){
    var router;

    router = {
        '/': function(){
            MAIN.init();
        },
        '/list': function(){
            LIST.init();
        },
        '/view': function(idx){
            VIEW.init(idx);
        }
    };


    return {
        init: function(){
            var _ = this;

            _.go('/');

            if(status.url !== undefined){
                window.onpopstate = function(e){
                    _.go(e.state);
                }
            }
        },
        go: function(url){
            console.log(url, router[url]);
            router[url]();
            history.pushState(url, null, url);
        }
    }
})();




/*(function(){
    var hostname = '';
    var status = {};
    var getStatus;

    getStatus = function(ag){
        var page, idx;

        page = ag[0];
        idx = ag.length > 1 ? ag[1] : 0;            // view처럼 idx 필요할 때 파라미터로 넘길 수 있도록
console.log(page);        
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
                        else VIEW.init(idx);
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
        go: function(){
            if(status.url !== undefined) {
                status.cb('destroy');
            }
            
            getStatus(arguments);
            history.pushState(status.name, status.tit, hostname + status.url);
            status.cb();
        }
    };
})();*/