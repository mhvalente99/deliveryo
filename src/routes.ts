import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesClientController } from "./modules/clients/useCases/findAllDeliveriesClient/FindAllDeliveriesClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableDeliveryController } from "./modules/deliveries/useCases/findAllAvailableDelivery/FindAllAvailableDeliveryController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesClientController = new FindAllDeliveriesClientController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableDeliveryController = new FindAllAvailableDeliveryController();
const updateDeliverymanController = new UpdateDeliverymanController();

routes.post("/client", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.get("/client/deliveries", [ensureAuthenticateClient], findAllDeliveriesClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/deliveryman", authenticateDeliverymanController.handle);

routes.post("/delivery", [ ensureAuthenticateClient ], createDeliveryController.handle);
routes.get("/delivery/available", [ ensureAuthenticateDeliveryman ], findAllAvailableDeliveryController.handle);
routes.put("/delivery/updateDeliveryman/:id", [ ensureAuthenticateDeliveryman ], updateDeliverymanController.handle);

export { routes };
