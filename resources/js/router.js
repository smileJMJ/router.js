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
        init: function(url){
            var url = arguments[0] || '/';      // arguments[0] 은 url, arguments[1] 은 idx

            window.onpopstate = function(e){
                if(e.state) router[e.state['url']](e.state['idx']);
            }

            history.pushState({'url':url, 'idx':arguments[1]}, null, url);
            router[url](arguments[1]);              
        }
    };

    return ROUTER;
})();