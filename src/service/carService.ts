import {Car} from "../model/car";
import {Category} from "../model/category";
import {AppDataSource} from "../data-source";

class CarService {
    private carRepository
    private categoryRepository

    constructor() {
        this.carRepository = AppDataSource.getRepository(Car)
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    getAllCarByCategory = async () => {
        let sql = `SELECT *
                   FROM car
                    JOIN category 
                        ON car.categoryIdIdCategory = category.idCategory`

        return await this.carRepository.query(sql)
    }

    findById = async (id) => {
            let car = await this.carRepository.findOneBy({id: id})
            if (!car) {
                return null;
            }
            return car
        }


    saveCar = async (car) => {
        return this.carRepository.save(car)
    }

    // private updateProduct = async (id, newProduct) => {
    //     let product = await this.productRepository.findOneBy({id: id})
    //     if (!product) {
    //         return null;
    //     }
    //     return await this.productRepository.update({id: id}, newProduct)
    // }


    // findById = async (id) => {
    //     let product = await this.productRepository.findOneBy({id: id})
    //     if (!product) {
    //         return null;
    //     }
    //     return product
    // }
    // private deleteProduct = async (id) => {
    //     let product = await this.productRepository.findOneBy({id: id})
    //     if (!product) {
    //         return null;
    //     }
    //     return await this.productRepository.delete({id: id})
    // }
    // searchProduct = async (name) => {
    //     let sql = `SELECT *
    //                FROM product p
    //                         JOIN category c ON p.category = c.idCategory
    //                WHERE name LIKE '%${name}%'`
    //     let products = await this.productRepository.query(sql)
    //     if (!products) {
    //         return null
    //     }
    //     return products
    // }
    // priceRange = async (value) => {
    //     let products;
    //     let sql;
    //     switch (value) {
    //         case 99:
    //             sql = `SELECT *
    //                    FROM product p
    //                             JOIN category c ON p.category = c.idCategory
    //                    WHERE price BETWEEN 0 AND ${value}`
    //             products = await this.productRepository.query(sql);
    //             if (!products) {
    //                 return null;
    //             }
    //             return products;
    //         case 499:
    //             sql = `SELECT *
    //                    FROM product p
    //                             JOIN category c ON p.category = c.idCategory
    //                    WHERE price BETWEEN 100 AND ${value}`
    //             products = await this.productRepository.query(sql);
    //             if (!products) {
    //                 return null;
    //             }
    //             return products;
    //         case 999:
    //             sql = `SELECT *
    //                    FROM product p
    //                             JOIN category c ON p.category = c.idCategory
    //                    WHERE price BETWEEN 500 AND ${value}`
    //             products = await this.productRepository.query(sql);
    //             if (!products) {
    //                 return null;
    //             }
    //             return products;
    //         case 1999:
    //             sql = `SELECT *
    //                    FROM product p
    //                             JOIN category c ON p.category = c.idCategory
    //                    WHERE price BETWEEN 1000 AND ${value}`
    //             products = await this.productRepository.query(sql);
    //             if (!products) {
    //                 return null;
    //             }
    //             return products;
    //         default:
    //             return await this.productRepository.find();
    //     }
    // }
}

export default new CarService()