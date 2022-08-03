import { Request, Response } from "express";
import { FindAllAvailableDeliveryUseCase } from "./FindAllAvailableDeliveryUseCase";

export class FindAllAvailableDeliveryController {
  async handle(request: Request, response: Response) {
    const findAllAvailableDeliveryUseCase = new FindAllAvailableDeliveryUseCase();

    const deliveries = await findAllAvailableDeliveryUseCase.execute();

    return response.json(deliveries);
  }
}
