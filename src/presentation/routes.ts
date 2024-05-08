import { Router } from 'express';
import { BusRoutes } from './buses/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    // router.use('/api/todos', /*TodoRoutes.routes */ );

    router.use('/api/coordenadas', BusRoutes.routes)

    return router;
  }


}

