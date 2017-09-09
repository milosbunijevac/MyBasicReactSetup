import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';


const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('images'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/src', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/src', 'index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log('This is the express error: ', error);
  } else {
    console.log('Express is listening on port: ', port);
  }
});
