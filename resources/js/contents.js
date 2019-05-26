var MAIN;
var LIST;
var VIEW;

// MAIN
MAIN = (function(){
	var wrap, container;

	var makeCon = function(){
		var img = document.createElement('img');
		var a = document.createElement('a');

		img.src = 'resources/img/main.jpg';
		img.width = 500;
		a.href = '/list';
		a.text = '리스트로 이동';
		a.onclick = function(e){
			e.preventDefault();
			MAIN.destroy();
			ROUTER.go('LIST');
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

			makeCon();
		},
		destroy: function(){
			if(wrap.children.length <= 0) return;
			wrap.removeChild(container); 
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

		for(i=0; i<liLength; i++){
			var li = document.createElement('li');
			var a = document.createElement('a');

			a.href = '/view/' + i;
			a.dataset.index = i;
			a.text = '콘텐츠' + i + '로 이동';
			a.onclick = function(e){
				e.preventDefault();
				var idx = Number(this.dataset.index);
				ROUTER.go('VIEW', idx);
			};

			li.appendChild(a);
			ul.appendChild(li);
		}

		btnHome.href = '/index.html';
		btnHome.text = '홈으로 이동';
		btnHome.onclick = function(e){
			e.preventDefault();
			LIST.destroy();
			ROUTER.go('MAIN');
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
		},
		destroy: function(){
			if(wrap.children.length <= 0) return;
			wrap.removeChild(container); 
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

			makeCon(idx);
		},
		destroy: function(){
			if(wrap.children.length <= 0) return;
			wrap.removeChild(container); 
		}
	};
})();