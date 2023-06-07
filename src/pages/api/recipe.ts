``
import type { NextApiRequest, NextApiResponse } from 'next'
import { FirebaseFunctions } from '@/firebase/functions';
import recipes from  './recipe_template.json';

type Data = {
  message: string,
  Recipes : []
}
let Recipes : any[] = [];


export default async function Recipe(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { method } = req;
    switch(method) {
     case 'GET' :
      res.send(recipes) 
      break;
     case 'POST' : 
     const ricetta = req.body;
     console.log(ricetta)
     //new FirebaseFunctions().WriteDbRecipe(ricetta,req,res)
     break;
     case 'PUT' : 
      //new FirebaseFunctions().UpDateDbRecipe(req,res)
      break;
     default :
     res.setHeader("Allow", ["GET", "POST","PUT","DELETE"],)
     res.setHeader('Content-Type', 'text/json')
    res.status(405).end(`Method ${method} Not Allowed`); 
    break;
    }
}
