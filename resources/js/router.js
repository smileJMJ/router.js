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
            if(idx !== undefined) VIEW.init(idx);
        }
    };

    ROUTER = {
        init: function(){
            var url = arguments[0] || '/';      // arguments[0] 은 url, arguments[1] 은 idx

            window.onpopstate = function(e){
                console.log('popstate');
                if(e.state) router[e.state['url']](e.state['idx']);
            }

            var xhttp = new XMLHttpRequest();
            console.log(xhttp)
xhttp.onreadystatechange = function(e) {
    e.preventDefault();
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.responseText);
    }else{
        console.log(xhttp.responseText)
    }
};

            history.pushState({'url':url, 'idx':arguments[1]}, null, url);
            router[url](arguments[1]);              
        }
    };
})();
