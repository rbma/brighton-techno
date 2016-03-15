'use strict';

import Deformer from './deformer';

class Scope {

	constructor(){

		this.scenes = {};
		this.loadThree();
	}


	loadThree(){
		const self = this;
		const headTag = document.getElementsByTagName('head')[0];
		const threeScript = document.createElement('script');

		headTag.appendChild(threeScript);

		threeScript.onload = function(){
			self.init();
		};

		threeScript.src = 'https://ajax.googleapis.com/ajax/libs/threejs/r73/three.min.js';
	}

	

	init(){
		console.log('INIT');

		var deformer = new Deformer();
		deformer.init(0, 'images/tom-52.c0ef339b.jpg', 70.0);

		var deformer = new Deformer();
		deformer.init(1, 'images/zine-52.289b3409.jpg');

		var deformer = new Deformer();
		deformer.init(2, 'images/tom-hardy.d7c36329.jpg');

		var deformer = new Deformer();
		deformer.init(3, 'images/box-1.d5df126d.jpg');

		var deformer = new Deformer();
		deformer.init(4, 'images/box-3.d5df126d.jpg');

		var deformer = new Deformer();
		deformer.init(5, 'images/box-8.d5df126d.jpg');
	}
}

export default Scope;