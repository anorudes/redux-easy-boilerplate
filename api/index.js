import Express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import fs from 'fs';

// API routes
import routes from './routes.js';

const app = new Express();
const server = new http.Server(app);
const logPath = __dirname + '/../logs/api.log';
const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' });

app.set('trust proxy', 1);
app.use(cookieParser());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(routes);
app.use((err, req, res, next) => {
  if (err) {
    fs.appendFile(logPath, err);
    console.log(err);
  }
  next();
});

server.listen(3030, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Api is listening on http://%s:%s', host, port);
});
