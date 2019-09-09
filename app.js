"use strict";

import { GetSoundAsset } from "./SoundAssets.js";
import { GetRandomNumber } from "./Utils.js";

const createAudioPlayer = assetID => {
	const asset = GetSoundAsset(assetID);
	const container = document.createElement("div");
	container.id = "audioplayer-" + assetID;
	const files = asset.files;
	files.forEach(file => {
		const audio = document.createElement("audio");
		const src = document.createElement("source");
		src.type = file.type;
		src.src = file.url;
		audio.appendChild(src);
		audio.setAttribute("loop", "1");
		audio.volume = document.querySelector(
			".controls input.volume"
		).value;
		container.appendChild(audio);
	});
	container.play = function() {
		this.querySelectorAll("audio").forEach(a => {
			a.play();
		});
	};
	container.pause = function() {
		this.querySelectorAll("audio").forEach(a => {
			a.pause();
		});
	};
	container.toggle = function() {
		let i = 0;
		this.querySelectorAll("audio").forEach(a => {
			if (a.paused) {
				if (i > 0) {
					const randomDelay = GetRandomNumber(
						2000,
						3500
					);
					setTimeout(() => {
						a.play();
					}, randomDelay);
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

const playAudio = assetID => {
	const player =
		document.getElementById("audioplayer-" + assetID) ||
		createAudioPlayer(assetID);
	player.toggle();
};

const toggleMute = btn => {
	const audioEls = document.querySelectorAll("audio");
	if (audioEls.length) {
		btn.classList.toggle("is--active");
		audioEls.forEach(a => {
			if (a.muted) a.muted = false;
			else a.muted = true;
		});
	}
};

const changeVolume = vol => {
	vol = parseFloat(vol, 2);
	const audioEls = document.querySelectorAll("audio");
	const muteBtn = document.querySelector(".controls .mute");
	if (vol === 0) muteBtn.classList.add("is--active");
	else muteBtn.classList.remove("is--active");
	if (audioEls.length) {
		audioEls.forEach(a => {
			a.volume = vol;
		});
	}
};

document.querySelector(".controls input.volume").addEventListener(
	"input",
	function() {
		changeVolume(this.value);
	}
);

document.querySelector(".controls").addEventListener("click", evt => {
	evt.preventDefault();
	let btn = undefined;
	const action = evt.target.getAttribute("data-action");
	if (evt.target.nodeName === "BUTTON") {
		btn = evt.target;
	}
	switch (action) {
	case "toggle-water":
	case "toggle-rain":
	case "toggle-thunderstorm":
	case "toggle-rainstorm":
		btn.classList.toggle("is--active");
		playAudio(action.replace("toggle-", ""));
		break;
	case "toggle-mute":
		toggleMute(btn);
		break;
	default:
		break;
	}
});
