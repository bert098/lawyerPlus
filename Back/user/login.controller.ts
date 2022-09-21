import * as express from 'express';
import { User } from "../Models/entity/User"
import { AppDataSource } from "../Models/data-source"
 
class LoginController {
  public path = '/login';
  public router = express.Router();
 
  // private users: User[] = [
  //   {
  //     email: 'test@test.com',
  //     username: 'testuser',
  //     password: 'password',
  //   }
  // ];

 
  constructor() {
    console.log('here')
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = async (request: express.Request, response: express.Response) => {
    let user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", {email: request.params.email})
    .andWhere("user.password = :password", {password: request.params.password})
    .getOne()
    if(user){
      response.status(200).json({
        message: "found user!"
      })
    }else{
      response.status(400).json({
        message: "user not found"
      })
    }
  }
 
  createAPost = async (request: express.Request, response: express.Response) => {
    AppDataSource.initialize().then(async () => {

      console.log("Inserting a new user into the database...")
      const user = new User()
      user.email = request.body.email
      user.username = request.body.username
      user.password = 23
      await AppDataSource.manager.save(user)
      console.log('here 2')
      const users = await AppDataSource.manager.find(User)
      response.json(users);
  }).catch(error => console.log(error))  
  }
}
 
export default LoginController;