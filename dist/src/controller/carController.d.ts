import { Request, Response } from "express";
declare class CarController {
    private carService;
    private categoryService;
    constructor();
    getAllCars: (req: Request, res: Response) => Promise<void>;
    getCarInformationById: (req: Request, res: Response) => Promise<void>;
    createCar: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CarController;
export default _default;
