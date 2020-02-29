const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ver = "290220";

module.exports = {
	entry: {
		common: "./src/common.js",
		index: "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name]_"+ ver +".js",
	},
	mode: "none",
	watch: true,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.svg/,
				use: {
					loader: 'svg-url-loader',
				}
			},
			{
				test: /\.(gif|jpe?g|png)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "img/[hash].[ext]"
						}
					},
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
								quality: 85
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75
							}
						}
					},
				],
			},

		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My App',
			filename: 'index.html',
			template: 'src/index.html',
			versiyon: "release v1.0",
			minify: true
		})
	]
};