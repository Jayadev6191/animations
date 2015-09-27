(function(){

	var timerInterval=setInterval(timer,30);
	var audio = document.getElementById('audio');
	function timer(){
		var currentSec=Math.floor(audio.currentTime);
		console.log(currentSec);
		if(currentSec==6){
			$('body').append('<img id="zaki" src="images/zaki_shades.jpg"/>');
			$('body').append('<img id="abhi" src="images/abhi_intro.jpg"/>');
			audio.currentTime=7;
		}
		if(currentSec==17){
			$('body').append('<img id="zeeshan" src="images/zeeshan_eddie.jpg"/>');
			$('body').append('<img id="abhi" src="images/zaki.jpg"/>');
			audio.currentTime=18;
		}

		if(currentSec==28){
			$('body').children('img').remove();
			clearInterval(timerInterval);
			$('body').append('<canvas id="canvas"></canvas>');
			// $('body').append('<img class="left" src="images/abhi_frustration.JPG"/>');
			preInit();
			// $('body').append('<img class="left" src="images/zeeshan_sheik.jpg"/>');

		}
	}

	// function scroll(){

	// }

	var zeeshan={
		x:-200,
		y:0,
		imgSrc:"images/zeeshan_prof.jpg",
		direction:1
	};

	var abhi={
		x:800,
		y:-500,
		imgSrc:"images/abhi_intro.jpg",
		direction:1
	};

	var zaki={
		x:800,
		y:0,
		imgSrc:"images/abhi_intro.jpg"	
	};

	function preInit(){
		var canvas=document.getElementsByTagName("canvas")[0];
		var ctx = canvas.getContext("2d");
		var direction=1;
		canvas.width=window.innerWidth;
		canvas.height=window.innerHeight;
		zeeshan.img = new Image();
		zeeshan.img.src=zeeshan.imgSrc;

		abhi.img = new Image();
		abhi.img.src=abhi.imgSrc;

		ctx.drawImage(zeeshan.img,zeeshan.x,zeeshan.y,200,400);
		ctx.drawImage(abhi.img,abhi.x,abhi.y,200,400);

		function animate(){
				console.log(Math.floor(audio.currentTime));
				var initialAnimation=Math.floor(audio.currentTime);
				
				if(zeeshan.x==0){
					zeeshan.direction=1;
				}

				if(zeeshan.x==screen.width-200){
					zeeshan.direction=-1;
				}

				zeeshan.x=zeeshan.x+(zeeshan.direction*5.0);

				// if(abhi.y==0){
				// 	direction=1;
				// }

				// if(abhi.y==screen.height-300){
				// 	direction=-1;
				// }

				// abhi.y=abhi.y+(direction*25.0);


				ctx.clearRect(0,0,canvas.width,canvas.height);
				ctx.drawImage(zeeshan.img,zeeshan.x,zeeshan.y,200,400);
				ctx.drawImage(abhi.img,abhi.x,abhi.y,200,300);
				
			}
		var animateInterval=setInterval(animate,20);

	}
	
	// function init(){

	// 		// var audio = document.getElementById('audio');
	// 		// audio.currentTime=56.6;
	// 		// if(audio.currentTime==10.0){
	// 		// 	alert('hi');
	// 		// }
	// 		// audio.addEventListener('timeupdate',function(){
	// 		//     var currentTimeMs = ((audio.currentTime*1000)/60)*3;
	// 		//     console.log(currentTimeMs);
	// 		// },false);
			
	// 		// var time=Math.floor(audio.currentTime);
	// 		// if(time==3.0){
	// 		// 	alert('hi');
	// 		// }

	// 		var pic=new Image();
	// 		pic.src="images/wedding.jpg";	
	// 		console.log(canvas.x);
	// 		console.log(canvas.y);
	// 		ctx.drawImage(pic,canvas.x,canvas.y,400,600);


	// 		function animate(){
	// 			// console.log(Math.floor(audio.currentTime));

	// 			if(canvas.x==0){
	// 				direction=1;
	// 			}

	// 			if(canvas.x==screen.width-400){
	// 				direction=-1;
	// 			}

	// 			canvas.x=canvas.x+(direction*5.0);
	// 			ctx.clearRect(0,0,canvas.width,canvas.height);
	// 			ctx.drawImage(pic,canvas.x,canvas.y,400,600);
				
	// 		}


	// 		// Call animate function continuously for every 20 milliseconds
	// 		var animateInterval=setInterval(animate,20);
			
	// }
	// window.addEventListener('load',preInit,false);
}());
