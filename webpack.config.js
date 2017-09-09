var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {
	webpackConfig.entry = {
		'index': './index.js'
	};

	webpackConfig.output.path = path.join(__dirname, './dist');
	webpackConfig.output.filename = '[name].js';

	// 每个页面对应的主js的生成配置
	webpackConfig.output.chunkFilename = '[id].chunk.js';

	webpackConfig.module.loaders.push({
		test: /\.lesx$/,
		loader: 'lesx-loader',
		query: {
			loaders: {
				js: 'babel',
				css: 'style!css',
				sass: 'style!css!sass'
			},
			uiLib: {
				libName: 'antd',
				libDirectory: 'lib'
			}
		}
	});

	// 不抽取公共模块
	webpackConfig.plugins.shift();

	return webpackConfig;
};
