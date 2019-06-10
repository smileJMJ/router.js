var ROUTER;
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
            console.log(idx);
            VIEW.init(idx);
        }
    };

    ROUTER = {
        init: function(){
            var url = arguments[0] !== undefined ? arguments[0] : '/';      // arguments[0] 은 url

            window.onpopstate = function(e){
                router[e.state](arguments[1]);
            }

            history.pushState(url, null, url);
            router[url](arguments[1]);              
        }
    };
})();
