import { Router, Request, Response } from "express";
import Suits from "../models/Suits";
class suitsRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  public async getSuits(req: Request, res: Response): Promise<void> {
    const suits = await Suits.find();
    res.json({Suits: suits});
  }
  public async postSuits(req: Request, res: Response): Promise<void> {
    const { nameSuit, cost, content } = req.body;
    const newSuits = new Suits({nameSuit, cost, content });
    await newSuits.save();
    res.json({status: res.status, data: newSuits});
  }
  public async putSuits(req: Request, res: Response): Promise<void> {
    const { nameSuit } = req.body;
    const suits = await Suits.findOneAndUpdate({nameSuit}, req.body);
    res.json({status: res.status, data: suits});
  }
  public async deleteSuits(req: Request, res: Response): Promise<void> {
    const { nameSuit } = req.body;
    const suits = await Suits.findOneAndRemove({nameSuit});
    res.json({status: res.status, data: suits});
  }
  routes() {
    this.router.get("/", this.getSuits);
    this.router.post("/", this.postSuits);
    this.router.put("/", this.putSuits);
    this.router.delete("/", this.deleteSuits);
  }
}
const suitsRouter = new suitsRoutes();
export default suitsRouter.router;