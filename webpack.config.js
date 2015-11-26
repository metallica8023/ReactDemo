/**
 * Created by zhaobo on 15/11/20.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
	entry:
		//{
		[
			'webpack/hot/only-dev-server',
			'./app/client.js'
		],
		//entry: './app/client.js'
	//},
	output: {
		path: __dirname,
		publicPath:'./build',
		filename: './build/[name].entry.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			/*{
				test  : /\.js$/,
				loader: 'babel-loader!jsx-loader?harmony'
			}*/
			{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader!jsx-loader?harmony'},
			{
			test: /\.jsx$/,
			loader: 'babel-loader!jsx-loader?harmony'
		}]
	},
	plugins: [commonsPlugin]
};