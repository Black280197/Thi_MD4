"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carService_1 = __importDefault(require("../service/carService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class CarController {
    constructor() {
        this.getAllCars = async (req, res) => {
            console.log("get all product");
            try {
                let products = await this.carService.getAllCarByCategory();
                let categories = await this.categoryService.getAllCategory();
                let data = [products, categories];
                console.log("data get all products:", data);
                res.status(200).json(data);
            }
            catch (err) {
                console.log("error happen in get all");
                res.status(500).json(err.message);
            }
        };
        this.getCarInformationById = async (req, res) => {
            console.log("get a car");
            try {
                let car = await this.carService.findById(req.params.id);
                console.log("data get all products:", car);
                res.status(200).json(car);
            }
            catch (err) {
                console.log("error happen in get all");
                res.status(500).json(err.message);
            }
        };
        this.createCar = async (req, res) => {
            try {
                let newCar = await this.carService.saveCar(req.body);
                console.log(req.body);
                res.status(200).json(`Thêm thành công:  
                                                        ${newCar}`);
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        };
        this.carService = carService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new CarController();
//# sourceMappingURL=carController.js.map