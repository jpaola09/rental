import { Router, Request, Response } from "express";
import Users from "../models/Users";
class usersRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  public async getUsers(req: Request, res: Response): Promise<void> {
    const users = await Users.find();
    res.json({Users: users});
  }
  public async postUsers(req: Request, res: Response): Promise<void> {
    const { name, lastname, address } = req.body;
    const newUsers = new Users({name, lastname, address });
    await newUsers.save();
    res.json({status: res.status, data: newUsers});
  }
  public async putUsers(req: Request, res: Response): Promise<void> {
    const { name } = req.body;
    const users = await Users.findOneAndUpdate({name}, req.body);
    res.json({status: res.status, data: users});
  }
  public async deleteUsers(req: Request, res: Response): Promise<void> {
    const { name } = req.body;
    const users = await Users.findOneAndRemove({name});
    res.json({status: res.status, data: users});
  }
  routes() {
    this.router.get("/", this.getUsers);
    this.router.post("/", this.postUsers);
    this.router.put("/", this.putUsers);
    this.router.delete("/", this.deleteUsers);
  }
}
const usersRouter = new usersRoutes();
export default usersRouter.router;