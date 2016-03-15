'use strict';


class Deformer {

	constructor(id){

		this.renderer = null;
		this.scene = null;
		this.camera = null;
		this.geometry = null;
		this.material = null;
		this.mesh = null;
		this.clock = null;
		this.uniforms = null;
		
		this.parent = null;

		// ------------------------------------------------
		// Variables
		//
		this.id = 0;
		this.img = 0;
		this.imgDiv = null;
	}


	init(id, img, t){
		const self = this;

		this.id = id;
		this.img = img;
		this.st = (t === undefined) ? Math.random()*3600.0 : t;

		this.parent = document.getElementById('nCvs' + this.id);
		this.imgDiv = document.getElementById('nCvs' + this.id + 'Img');

		this.scene = new THREE.Scene();
		this.camera = new THREE.Camera();
		this.camera.position.z = 1;

		this.clock = new THREE.Clock();

		this.geometry = new THREE.PlaneBufferGeometry(2, 2);

		this.uniforms = {
			iGlobalTime: { type: "f", value: 1.0 },
			iResolution: { type: "v2", value: new THREE.Vector2() },
			iChannel0: { type: "t", value: THREE.ImageUtils.loadTexture(this.img) },
			seed: { type: "f", value: this.st }
		};

		this.uniforms.iResolution.value.x = this.parent.clientWidth;
		this.uniforms.iResolution.value.y = this.parent.clientHeight;


		this.material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: document.getElementById('vertexShader').textContent,
			fragmentShader: document.getElementById('fragmentShader').textContent
		});

		this.mesh = new THREE.Mesh(this.geometry, this.material);
    	this.scene.add(this.mesh);

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(this.parent.clientWidth, this.parent.clientHeight);
		this.parent.appendChild(this.renderer.domElement);


		// ------------------------------------------------
		// Resize
		//
		
		window.addEventListener('resize', function(e){
			self.uniforms.iResolution.value.x = self.parent.clientWidth;
			self.uniforms.iResolution.value.y = self.parent.clientHeight;

			self.renderer.setSize(self.parent.clientWidth, self.parent.clientHeight);
		}, false);


		this.animate();
	}


	animate(){
		const self = this;

		this.animation = requestAnimationFrame(function(){
			self.animate();
		});

		this.render();
	}


	render(){
		this.uniforms.iGlobalTime.value = this.clock.getElapsedTime();
		this.renderer.render(this.scene, this.camera);
	}
}

export default Deformer;