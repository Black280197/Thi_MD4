import  {Router, Request, Response} from "express"
import carController from "../controller/carController";

export const  router = Router()
router.get('/allcars',carController.getAllCars);
router.get('/findcar/:id',carController.getCarInformationById);
router.post('/createcar',carController.createCar);


// router.use('/products',productRouter)