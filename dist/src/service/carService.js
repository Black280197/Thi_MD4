"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("../model/car");
const category_1 = require("../model/category");
const data_source_1 = require("../data-source");
class CarService {
    constructor() {
        this.getAllCarByCategory = async () => {
            let sql = `SELECT *
                   FROM car
                    JOIN category 
                        ON car.categoryIdIdCategory = category.idCategory`;
            return await this.carRepository.query(sql);
        };
        this.findById = async (id) => {
            let car = await this.carRepository.findOneBy({ id: id });
            if (!car) {
                return null;
            }
            return car;
        };
        this.saveCar = async (car) => {
            return this.carRepository.save(car);
        };
        this.carRepository = data_source_1.AppDataSource.getRepository(car_1.Car);
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.default = new CarService();
//# sourceMappingURL=carService.js.map