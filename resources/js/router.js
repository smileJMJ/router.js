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
(function(){
    var router;
    router = {
        '/': function(){
            MAIN.init();
        },
        '/list': function(){
            LIST.init();
        },
        '/view': function(idx){
            if(idx !== undefined) VIEW.init(idx);
        }
    };

    ROUTER = {
        init: function(){
            var url = arguments[0] || '/';      // arguments[0] 은 url, arguments[1] 은 idx

            window.onpopstate = function(e){
                if(e.state) router[e.state['url']](e.state['idx']);
            }

            history.pushState({'url':url, 'idx':arguments[1]}, null, url);
            router[url](arguments[1]);              
        }
    };
})();*/