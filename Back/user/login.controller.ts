import * as express from 'express';
import { User } from "../Models/entity/User"
import { AppDataSource } from "../Models/data-source"
const jwt = require("jsonwebtoken");
const bcrypt = require ('bcrypt');
 
class LoginController {
  public createPath = '/user';
  public loginPath = '/user/login';
  public tokenPath = '/user/token';
  public router = express.Router();

 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.loginPath, this.login);
    this.router.post(this.createPath, this.createUser);
    this.router.get(this.tokenPath, this.getUserByToken);
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
    try{
      if(await bcrypt.compare(request.query.password, user.password)){
        const token = jwt.sign(
          { user_id: user.id, user_email: user.email },
          "12345",
        );
        user.token = token;
        await AppDataSource.manager.save(user)
        response.status(200).json({
          message: "log in successful",
          token: token
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
      await AppDataSource.manager.save(user)
      response.json(user.email);
    }catch{
      response.status(500).send()
    }
  }
  getUserByToken = async (request: express.Request, response: express.Response) => {
    let user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.token = :token", {token: request.query.token})
    .getOne()
    if(!user){
      response.status(400).json({
        message: "does not exsist"
      })
    } else{
      response.status(200).json({
        user: user
      })
    }
  }
}

async function hashPassword(password: string){
  const hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
}
 
export default LoginController;