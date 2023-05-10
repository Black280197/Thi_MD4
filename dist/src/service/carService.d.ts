declare class CarService {
    private carRepository;
    private categoryRepository;
    constructor();
    getAllCarByCategory: () => Promise<any>;
    findById: (id: any) => Promise<any>;
    saveCar: (car: any) => Promise<any>;
}
declare const _default: CarService;
export default _default;
