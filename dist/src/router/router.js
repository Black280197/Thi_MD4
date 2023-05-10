"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const carController_1 = __importDefault(require("../controller/carController"));
exports.router = (0, express_1.Router)();
exports.router.get('/allcars', carController_1.default.getAllCars);
exports.router.get('/findcar/:id', carController_1.default.getCarInformationById);
exports.router.post('/createcar', carController_1.default.createCar);
//# sourceMappingURL=router.js.map