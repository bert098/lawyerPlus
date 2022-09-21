import * as express from 'express';
import User from './user.interface';
 
class LoginController {
  public path = '/login';
  public router = express.Router();
 
  private users: User[] = [
    {
      email: 'test@test.com',
      username: 'testuser',
      password: 'password',
    }
  ];
 
  constructor() {
    console.log('here')
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    console.log('get')
    response.json(this.users) 
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    console.log('post')
    const post: User = request.body;
    this.users.push(post);
    response.send("111");
  }
}
 
export default LoginController;