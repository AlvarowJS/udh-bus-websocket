import { Router } from 'express';
import { BusController } from './controller';
export class BusRoutes {
    static get routes() {
        const router = Router();
        const busController = new BusController();

        router.get('/coordenadas', busController.getCoordenadas)

        return router;
    }
}