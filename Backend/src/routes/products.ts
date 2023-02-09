import { Router } from "express";
import { ProductsController } from './../controller/Products.Controller';



const router = Router();

//Products all products
router.get('/', ProductsController.getAll);

//Get one product
router.get('/:cCodPrd', ProductsController.getById)
//CreateProduct

router.post('/', ProductsController.new);

export default router;
