import {Request,Response} from "express";
import carService from "../service/carService";
import categoryService from "../service/categoryService";

class CarController{
    private carService
    private categoryService
    constructor(){
        this.carService = carService
        this.categoryService = categoryService

    }
    getAllCars= async (req: Request, res: Response)=>{
        console.log("get all product")
        try{
            let products = await this.carService.getAllCarByCategory();
            let categories = await this.categoryService.getAllCategory();
            let data = [products,categories]
            console.log("data get all products:", data)
            res.status(200).json(data);

        }catch(err){
            console.log("error happen in get all")
            res.status(500).json(err.message);
        }
    }

    getCarInformationById = async (req: Request, res: Response)=>{
        console.log("get a car")
        try{
            let car = await this.carService.findById(req.params.id);
            console.log("data get all products:", car)
            res.status(200).json(car);

        }catch(err){
            console.log("error happen in get all")
            res.status(500).json(err.message);
        }
    }

    createCar= async (req: Request, res: Response)=>{
        try{
            let newCar = await this.carService.saveCar(req.body)
            console.log(req.body)
            res.status(200).json(`Thêm thành công:  
                                                        ${newCar}`);
        }catch(err){
            res.status(500).json(err.message);
        }
    }


    // createProduct= async (req: Request, res: Response)=>{
    //     try{
    //         let newProduct = await this.carService.saveProduct(req.body)
    //         res.status(200).json(newProduct);
    //     }catch(err){
    //         res.status(500).json(err.message);
    //     }
    // }
    // updateProduct = async (req:Request,res:Response)=>{
    //     try{
    //         let id = req.params.id;
    //         let editProduct = await this.carService.updateProduct(id,req.body)
    //         res.status(200).json({
    //             Message: "update product success",
    //             editProduct
    //         });
    //     }catch (err){
    //         res.status(500).json(err.message)
    //     }
    // }
    // deleteProduct = async (req:Request,res:Response)=>{
    //     try{
    //         let id = req.params.id;
    //         await this.carService.deleteProduct(id)
    //         res.status(200).json('delete product success')
    //     }catch (err){
    //         res.status(500).json(err.message)
    //     }
    // }
    // searchProducts = async (req:Request,res:Response)=>{
    //     try{
    //         let products = await productService.searchProduct(req.query.name)
    //         let categories = await categoryService.getAllCategory()
    //         let data = [products,categories]
    //         res.status(200).json(data)
    //
    //     }catch (err){
    //         res.status(500).json(err.message)
    //     }
    // }
}
export default  new CarController()

