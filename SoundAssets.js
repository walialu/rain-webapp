const soundAssets = {
	water: {
		files: [
			{
				url: "assets/aslo4Pa.ogg",
				type: "audio/ogg"
			},
			{
				url: "assets/aslo4Pb.ogg",
				type: "audio/ogg"
			}
		]
	},
	rainstorm: {
		files: [
			{
				url: "assets/lcha5Pa.ogg",
				type: "audio/ogg"
			},
			{
				url: "assets/lcha5Pb.ogg",
				type: "audio/ogg"
			}
		]
	},
	thunderstorm: {
		files: [
			{
				url: "assets/hssp11Ba.ogg",
				type: "audio/ogg"
			},
			{
				url: "assets/hssp11Bb.ogg",
				type: "audio/ogg"
			}
		]
	},
	rain: {
		files: [
			{
				url: "assets/lssp5Wa.ogg",
				type: "audio/ogg"
			},
			{
				url: "assets/lssp5Wb.ogg",
				type: "audio/ogg"
			}
		]
	}
};

export function GetSoundAsset(assetID) {
	return soundAssets[assetID];
}

export function GetSoundAssets() {
	return soundAssets;
}

