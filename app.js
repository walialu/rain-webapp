(()=>{

"use strict";

const _assets = {
	water: {
		files: [
			{
				url: 'assets/aslo4Pa.ogg',
				type: 'audio/ogg'
			},
			{
				url: 'assets/aslo4Pb.ogg',
				type: 'audio/ogg'
			}
		]
	},
	rainstorm: {
		files: [
			{
				url: 'assets/lcha5Pa.ogg',
				type: 'audio/ogg'
			},
			{
				url: 'assets/lcha5Pb.ogg',
				type: 'audio/ogg'
			}
		]
	},
	thunderstorm: {
		files: [
			{
				url: 'assets/hssp11Ba.ogg',
				type: 'audio/ogg'
			},
			{
				url: 'assets/hssp11Bb.ogg',
				type: 'audio/ogg'
			}
		]
	},
	rain: {
		files: [
			{
				url: 'assets/lssp5Wa.ogg',
				type: 'audio/ogg'
			},
			{
				url: 'assets/lssp5Wb.ogg',
				type: 'audio/ogg'
			}
			
		]
	}
}

const getRandomNumer = (min, max) => {
        min = min || 0;
        max = max || Number.MAX_SAFE_INTEGER;
        const a = max - min;
        const b = Math.random() * a;
        return Math.round(b + min);
};

const createAudioPlayer = (assetID) => {
	const asset = _assets[assetID];
	const container = document.createElement("div");
	container.id = "audioplayer-" + assetID;
	const files = asset.files;
	files.forEach((file) => {
		const audio = document.createElement("audio");
		const src = document.createElement("source");
		src.type = file.type;
		src.src = file.url;
		audio.appendChild(src);
		audio.setAttribute("loop", "1");
		container.appendChild(audio);
	});
	container.play = function() {
		this.querySelectorAll("audio").forEach((a) => {
			a.play();
		});
	};
	container.pause = function() {
		this.querySelectorAll("audio").forEach((a) => {
			a.pause();
		});
	};
	container.toggle = function() {
		let i = 0;
		this.querySelectorAll("audio").forEach((a) => {
			if (a.paused) {
				if (i > 0) {
					const randomDelay = getRandomNumer(2000, 3500);
					setTimeout(()=>{a.play();}, randomDelay);
				} else {
					a.play();
				}
				i++;
			} else {
				a.pause();
			}
		});
	};
	document.body.appendChild(container);
	return container;
};

const playAudio = (assetID) => {
	const player = document.getElementById("audioplayer-" + assetID) || createAudioPlayer(assetID);
	player.toggle();
};

document.querySelector(".controls").addEventListener("click", (evt) => {
	evt.preventDefault();
	const action = evt.target.getAttribute("data-action");
	if(evt.target.nodeName === "BUTTON") {
		evt.target.classList.toggle("is--active");
	}
	switch(action) {
		case "toggle-water":
			playAudio("water");
			break;
		case "toggle-rain":
			playAudio("rain");
			break;
		case "toggle-thunderstorm":
			playAudio("thunderstorm");
			break;
		case "toggle-rainstorm":
			playAudio("rainstorm");
			break;
		default:
		break;
	}
});

})();