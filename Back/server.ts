import App from './app';
import "reflect-metadata"
import LoginController from './user/login.controller';
 
const app = new App(
  [
    new LoginController(),
  ],
  5000,
);
 
app.listen();