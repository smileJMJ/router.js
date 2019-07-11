var MAIN;
var LIST;
var VIEW;
var DESTROY;

// MAIN
MAIN = (function(){
	var wrap, container;

	var makeCon = function(){
		var img = document.createElement('img');
		var a = document.createElement('a');

		img.src = '/resources/img/main.jpg';
		img.width = 500;
		a.href = '/list';
		a.text = '리스트로 이동';
		a.onclick = function(e){
			e.preventDefault();
			DESTROY.container();
			ROUTER.init('/list');
		};

		container.appendChild(img);
		container.appendChild(a);
		wrap.appendChild(container);
	};

	return {
		init: function(){
			wrap = document.getElementById('wrap');
			container = document.createElement('div');
			container.id = 'container';

			DESTROY.container();
			makeCon();
		}
	};
})();

// LIST
LIST = (function(){
	var wrap, container;

	var makeCon = function(){
		var ul = document.createElement('ul');
		var btnHome = document.createElement('a');
		var liLength = 5;
		var i;

		DESTROY.container();

		for(i=0; i<liLength; i++){
			var li = document.createElement('li');
			var a = document.createElement('a');

			a.href = '/view/' + i;
			a.dataset.index = i;
			a.text = '콘텐츠' + i + '로 이동';
			a.onclick = function(e){
				e.preventDefault();
				var idx = Number(this.dataset.index);
				ROUTER.init('/view', idx);
			};

			li.appendChild(a);
			ul.appendChild(li);
		}

		btnHome.href = '/index.html';
		btnHome.text = '홈으로 이동';
		btnHome.onclick = function(e){
			e.preventDefault();
			DESTROY.container();
			ROUTER.init('/');
		};

		container.appendChild(ul);
		container.appendChild(btnHome);
		wrap.appendChild(container);
	};

	return {
		init: function(){
			wrap = document.getElementById('wrap');
			container = document.createElement('div');
			container.id = 'container';

			makeCon();
		}
	};
})();

// VIEW
VIEW = (function(){
	var wrap, container;

	var makeCon = function(idx){
		var p = document.createElement('p');
		p.innerHTML = idx + '번째 콘텐츠 입니다.';

		container.appendChild(p);
		wrap.appendChild(container);
	};

	return {
		init: function(idx){
			wrap = document.getElementById('wrap');
			container = document.createElement('div');
			container.id = 'container';

			DESTROY.container();
			makeCon(idx);
		}
	};
})();

DESTROY = (function(){
	var all, container;

	all = function(){
		var body, wrap;
		body = document.body;
		wrap = document.getElementById('wrap');

		if(body.children.length > 0) body.removeChild(wrap);
	};

	container = function(){
		var wrap, container;
		wrap = document.getElementById('wrap');
		container = document.getElementById('container');
		if(wrap.children.length > 0) wrap.removeChild(container); 
	};

	return {
		all: all,
		container: container
	}
})();