'use strict';

const Headroom = require('headroom.js');

import ThreeScope from './components/three-scope';
import Video from './components/video';


class Piece {
	constructor(){
		this.threeScope = null;
		this.init();
	}

	// ------------------------------------------------
	// Kick off
	//
	
	init(){
		console.log('Servus');
		this.bindSocials();
		this.setupNav();
		this.bindVideo();

		this.threeScope = new ThreeScope();
	}



	// ------------------------------------------------
	// Listen for clicks on social sharing
	//
	bindSocials(){
		let self = this;

		let socials = document.getElementsByClassName('share-icon');

		for (let i = 0; i < socials.length; i++ ){
			socials[i].addEventListener('click', self.share, false);
		}
	}



	// ------------------------------------------------
	// Share
	//
	share(ev){
		ev.preventDefault();
		let site = this.getAttribute('data-site');

		if (site === 'twitter'){
        	var tweet = '.@tresorberlin label turns 25 this summer. @joemuggs tells about a strange offshoot - The Brighton Sound';
        	window.open('https://twitter.com/home?status=' +
	            (encodeURIComponent(tweet + ' ' +
	            window.location.href)),
	            'Twitter',
	            'toolbar=no,width=450,height=400,directories=no,status=no,scrollbars=yes,resize=no,menubar=no,top=200,left=200');
	    }

	    if (site === 'facebook'){
	        window.open('https://www.facebook.com/sharer/sharer.php?u=' +
	            (encodeURIComponent(window.location.href)),
	            'Facebook',
	            'toolbar=no,width=450,height=400,directories=no,status=no,scrollbars=yes,resize=no,menubar=no,top=200,left=200');
	    }
	}



	// ------------------------------------------------
	// Setup nav. Use headroom options to set 
	// scroll listener to div if not using window
	//http://wicky.nillia.ms/headroom.js/
	
	setupNav(){
		let header = document.getElementById('nav');
		let headroom = new Headroom(header);
		headroom.init();
	}



	// ------------------------------------------------
	// Watch for clicks on video
	//
	bindVideo(){
		let self = this;
		let videos = document.getElementsByClassName('video-inner');

		for (let i = 0; i < videos.length; i++ ){
			videos[i].addEventListener('click', self.playVideo, false);
		}
	}

	// ------------------------------------------------
	// Instantiate new video
	//
	playVideo(){
		const target = this;
		const src = target.getAttribute('data-src');
		let host = target.getAttribute('data-host');

		if (target.getAttribute('data-host')){
			host = target.getAttribute('data-host');
			
		}

		const video = new Video(target, src, host);
	}
	
};



let piece = new Piece();