const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, ''),
	entry: './app.js',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: 'bundle.js'
	},
	node: {
		fs: 'empty',
		net: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, ''),
				exclude: /(node_modules)|(dist)/
			}
		]
	}
}