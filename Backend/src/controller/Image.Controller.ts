import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { tbimagenes } from "../entity/Image";




export class ImageController {

  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(tbimagenes)
    let img = await userRepository.find();

    if(img.length>0){
      res.send(img);
    } else {
      res.status(404).json({ message: 'Not result' });
    }

  }

  static getById = async (req: Request, res: Response) =>{
    const { cCodPrd } = req.params;
    const userRepository = getRepository(tbimagenes);
    try {
      const tbimagenes = await userRepository.findOneOrFail(cCodPrd);
      res.send(tbimagenes);
    } catch(e) {
      res.status(e)
    }

  }



}

export default ImageController;
