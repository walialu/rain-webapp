import babel from "rollup-plugin-babel";

export default {
	input: "./src/app.js",
	output: {
		file: "dist/app.js",
		format: "umd"
	},
	watch: {
		chokidar: true,
		clearScreen: true,
		exclude: "",
		include: "src/**"
	},
	plugins: [
		babel({
			exclude: "node_modules/**"
		})
	]
};
