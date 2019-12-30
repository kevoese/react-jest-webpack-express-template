import express from 'express';
const path = require('path');
import routes from './routes';
import bodyParser from 'body-parser';
import config from '../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import Webpack from 'webpack';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  const webpackConfig = config();

  const compiler = Webpack(webpackConfig);

  app.use(
    WebpackDevMiddleware(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
    })
  );

  app.use(WebpackHotMiddleware(compiler));
}

routes(app);

app.use(express.static(path.resolve(__dirname, './public')));

const port = process.env.PORT || 2000;



export default app;
