import { Request, Response } from "express";

export class BusController {
    constructor() { }

    public getCoordenadas = async (req: Request, res: Response) => {
        res.json('getCoordenadas');
    }

}