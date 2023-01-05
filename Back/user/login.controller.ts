import * as express from 'express';
import { User } from "../Models/entity/User"
import { AppDataSource } from "../Models/data-source"
const bcrypt = require ('bcrypt');
 
class LoginController {
  public createPath = '/user';
  public loginPath = '/user/login';
  public router = express.Router();

 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.loginPath, this.login);
    this.router.post(this.createPath, this.createUser);
  }
 
  login = async (request: express.Request, response: express.Response) => {
    let user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", {email: request.query.email})
    .getOne()
    if(!user){
      response.status(400).json({
        message: "does not exsist"
      })
    }
    console.log(user)
    try{
      if(await bcrypt.compare(request.query.password, user.password)){
        response.status(200).json({
          message: "log in successful"
        })
      }
      else{
        response.status(400).json({
          message: "wrong password"
        })
      }
    } catch(e){
      console.log(e.message)
      response.status(500).send()
    }
  }
 
  createUser = async (request: express.Request, response: express.Response) => {
    try{
      const user = new User()
      user.email = request.body.email
      user.username = request.body.username
      user.password = await hashPassword(request.body.password.toString())
      console.log(request.body)
      await AppDataSource.manager.save(user)
      console.log('here 2')
      const users = await AppDataSource.manager.find(User)
      response.json(users);
    }catch{
      response.status(500).send()
    }
  }
}

async function hashPassword(password: string){
  const hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
}
 
export default LoginController;