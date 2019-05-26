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
		var liLength = 5;
		var i;

		for(i=0; i<liLength; i++){
			var li = document.createElement('li');
			var a = document.createElement('a');

			a.href = '/view/' + i;
			a.text = '콘텐츠' + i + '로 이동';
			a.onclick = function(e){
				e.preventDefault();
				ROUTER.go('VIEW');
			};

			li.appendChild(a);
			ul.appendChild(li);
		}

		container.appendChild(ul);
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

	var makeCon = function(){
		
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