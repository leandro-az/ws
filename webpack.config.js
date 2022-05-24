const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

const isLocal = slsw.lib.webpack.isLocal;

module.exports = {
	mode: isLocal ? 'development' : 'production',
	optimization: {
		minimize: false,
		nodeEnv: false,
	},
	entry: {
		'test': './src/handlers/handlerTest.ts',
		'class': './src/handlers/classHandler.ts',
		'config': './src/handlers/configHandler.ts',
		'discipline': './src/handlers/disciplineHandler.ts',
		'evaluation': './src/handlers/evaluationHandler.ts',
		'historicalAudit': './src/handlers/historicalAuditHandler.ts',
		'payment': './src/handlers/paymentHandler.ts',
		'permission': './src/handlers/permissionHandler.ts',
		'person': './src/handlers/personHandler.ts',
		'user': './src/handlers/userHandler.ts',
		'auth': './src/handlers/authHandler.ts'
		// 'google': './src/handlers/googleHandler.ts'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	output: {
		libraryTarget: 'umd',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js',
		libraryTarget: 'umd'
	},
	target: 'node',
	node: {
		__dirname: 'mock',
	},
	externals: [
		function ({ context, request }, callback) {
			nodeExternals({
				allowlist: [/^typeorm/, /^mysql/, /^pg/]
			})
			// Continue without externalizing the import
			callback();
		},
	],
	module: {
		rules: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
					happyPackMode: true
				},
				test: /\.ts$/,
				exclude: /\.spec\.ts$/,
			},
		],
	},
	plugins: [
		...(isLocal ? [new webpack.ProgressPlugin()] : []),
		new webpack.IgnorePlugin({
			checkResource: ignore([
				// imported by ws
				'utf-8-validate', 'bufferutil',
				// imported by typeorm
				'react-native-sqlite-storage', 'mssql', 'sql.js', 'sqlite3', 'better-sqlite3', 'ioredis', 'redis',
				'typeorm-aurora-data-api-driver', 'pg-query-stream', 'pg-native', 'pg', 'oracledb', 'mysql2',
				'hdb-pool', '@sap/hana-client', 'mongodb',
			]),
		}),
	],
};

function ignore(modules) {
	return resource => {
		if (!modules.includes(resource)) {
			// Not in the lazy imports list - don't ignore it
			return false;
		}

		try {
			// If the library is installed, don't ignore it
			require.resolve(resource);
		} catch (err) {
			// Else, ignore it
			return true;
		}
	}
}
