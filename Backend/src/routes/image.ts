import { Router } from "express";
import ImageController from "../controller/Image.Controller";


const router = Router();

//Get all products
router.get('/', ImageController.getAll);

router.get('/:cCodPrd', ImageController.getById)

export default router;
