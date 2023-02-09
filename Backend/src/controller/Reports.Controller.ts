import { validate } from "class-validator";
import { Request, Response } from "express"
import { getRepository } from "typeorm";
import { tbrevisar } from "../entity/Reports";






export class ReportsController {

  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository( tbrevisar);
    let reports = await userRepository.find();


  if(reports.length>0) {
    res.send(reports);
  } else {
    res.status(404).json({ message: 'Not result' });
  }

  }

  static new = async (req: Request, res: Response) => {
    const {cCodPrd, dtFecReg , cCvePer, nRevPrd, nInvAPrd } = req.body;
    const reports = new tbrevisar();
    reports.cCodPrd = cCodPrd;
    reports.dtFecReg =  dtFecReg;
    reports.cCvePer = cCvePer;
    reports.nInvAPrd = nInvAPrd;
    reports.nRevPrd =  nRevPrd;

 // Validate
//  const validationOpt = { validationError: { target: false, value: false } };
 const errors = await validate(tbrevisar);
 if (errors.length > 0) {
   return res.status(400).json(errors);
 }

// Todo
const userRepository = getRepository(tbrevisar);
try {
  await userRepository.save(reports)
} catch(e){
  return console.error(e);

}
res.send('Report created');

  }

  static getByDate = async (req: Request, res: Response) => {
    const { cCodPrd } = req.params;
    const userRepository = getRepository(tbrevisar);

     try{
       const tbrevisar = await userRepository.findOneOrFail(cCodPrd);
       res.send(tbrevisar)
     } catch (e){
       console.log(e)
     }






  }

}

export default ReportsController;
