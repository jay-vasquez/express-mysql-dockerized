import { Router, Request, Response } from "express";
import { Treasure, Amount } from "../../db/models";
import findTreasure from "../controllers/findTreasure";
import { TreasureRequest } from "../interface/TreasureRequest";
import { treasureRequestValidator } from "../utils/validator";

const router = Router();

router.get('/nearestTreasure', async (req: Request, res: Response) => {
    const request: TreasureRequest = {
        latitude: Number(<string>req.query.latitude),
        longitude: Number(<string>req.query.longitude),
        distance: Number(<string>req.query.distance),
        prize: req.query.prize ? Number(<string|undefined>req.query.prize) : undefined,
    }

    const errors = treasureRequestValidator(request);

    if (errors) {
        res.send(errors);
    } else {
        const response = await findTreasure(request);
        res.send(response);
    }
})

export default router;


