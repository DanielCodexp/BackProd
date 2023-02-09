import { Response,  Request } from "express";
import { getRepository } from "typeorm";
import { tbproductos } from "../entity/Products";




export class ProductsController {

static getAll = async (req: Request, res: Response) => {
  const userRepository = getRepository( tbproductos);
  let products = await userRepository.find();


if(products.length>0) {
  res.send(products);
} else {
  res.status(404).json({ message: 'Not result' });
}

}

static getById = async (req: Request, res: Response) =>{
  const { cCodPrd } = req.params;
  const userRepository = getRepository(tbproductos);
  try {
    const tbproductos = await userRepository.findOneOrFail(cCodPrd);
    res.send(tbproductos);
  } catch (e) {
    res.status(404).json({ message: 'Not result' });
  }
}

static new = async (req: Request, res: Response) => {
  const { cCodPrd,  cDesPrd, cPosPrd,  cDesUM } = req.body;
  const product = new tbproductos();
  product.cCodPrd = cCodPrd;
  product.cDesPrd = cDesPrd;
  product.cPosPrd = cPosPrd;
  product.cDesUM = cDesUM;
}



}

export default ProductsController;
